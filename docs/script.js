/**
 * PROJECT PORTAL ENGINE
 * ---------------------
 * Modular architecture designed to handle Hybrid (Markdown + HTML) files.
 */
const app = {
    currentPage: 'home',
    
    // Config: Defines page metadata. 
    pages: {
        home: {
            title: "What are transceivers?",
            subtitle: "A - Z of optics",
            type: "markdown", // Treat as Markdown; Marked.js handles embedded HTML automatically
            url: "./home.md" 
        },
        types_t: {
            title: "Types of Transceivers",
            subtitle: "Deep dive into the types of transceivers.",
            type: "markdown",
            url: "./types-t.md"
        },
        types_cables: {
            title: "Types of Cables",
            subtitle: "Deep dive into the sea of cables, you see what I did there ;)",
            type: "markdown",
            url: "./types-cables.md"
        },
        types_conn: {
            title: "Types of Connectors",
            subtitle: "Deep dive into the types of connectors.",
            type: "markdown",
            url: "./types-conn.md"
        }
        // types_cables: {
        //     title: "Types of Cables",
        //     subtitle: "Deep dive into the types of cables.",
        //     type: "html",
        //     url: "./types-c.md"
        // }
    },

    navigation: [
        { 
            label: "The ABCs", 
            links: ['home'] // These ids must match the keys in app.pages
        },
        { 
            label: "Types of L1 Media", 
            links: ['types_t', 'types_cables', 'types_conn'] 
        }
    ],

    // Navigation filtering
    config: {
        excludeFull: [], 
        excludeOnly: [] 
    },

    init: function() {
        // Configure marked options to ensure HTML is handled correctly
        if (typeof marked !== 'undefined') {
            marked.setOptions({
                mangle: false,
                headerIds: false,
                breaks: true, // Translates \n to <br>
                gfm: true     // GitHub Flavored Markdown
            });
        }
        
        this.renderTopNav(); // Call new nav renderer
        this.initSearch();   // Initialize search engine
        this.loadPage(this.currentPage);
    },

    renderMasterNav: function() {
        const list = document.getElementById('master-nav');
        list.innerHTML = '';
        Object.keys(this.pages).forEach(id => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            const a = document.createElement('a');
            a.className = `nav-link ${this.currentPage === id ? 'active' : ''}`;
            a.textContent = this.pages[id].title;
            a.onclick = (e) => {
                e.preventDefault();
                this.loadPage(id);
            };
            li.appendChild(a);
            list.appendChild(li);
        });
    },

    renderTopNav: function() {
        const container = document.getElementById('top-nav-items');
        if (!container) return;
        container.innerHTML = '';

        this.navigation.forEach(group => {
            const li = document.createElement('li');
            li.className = 'nav-group';
            
            // Create the Parent Button (Dropdown trigger)
            const btn = document.createElement('button');
            btn.className = 'nav-dropbtn';
            btn.innerHTML = `${group.label} <span class="arrow">▼</span>`;
            
            // Create the Dropdown Content container
            const dropdownDiv = document.createElement('div');
            dropdownDiv.className = 'dropdown-content';

            // Add the specific links assigned to this group
            group.links.forEach(pageId => {
                const page = this.pages[pageId];
                if (!page) return;

                const a = document.createElement('a');
                a.className = `dropdown-item ${this.currentPage === pageId ? 'active' : ''}`;
                a.textContent = page.title;
                a.onclick = (e) => {
                    e.preventDefault();
                    this.loadPage(pageId);
                };
                dropdownDiv.appendChild(a);
            });

            li.appendChild(btn);
            li.appendChild(dropdownDiv);
            container.appendChild(li);
        });
    },

    initSearch: function() {
        const input = document.getElementById('site-search');
        const results = document.getElementById('search-results');

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 2) { results.style.display = 'none'; return; }

            const hits = Object.keys(this.pages).filter(id => 
                this.pages[id].title.toLowerCase().includes(query) || 
                this.pages[id].subtitle.toLowerCase().includes(query)
            );

            if (hits.length > 0) {
                results.innerHTML = hits.map(id => 
                    `<div class="dropdown-item" onclick="app.loadPage('${id}')">${this.pages[id].title}</div>`
                ).join('');
                results.style.display = 'block';
            } else {
                results.style.display = 'none';
            }
        });

        // Close results when clicking away
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-bar')) results.style.display = 'none';
        });
    },

    /**
     * Resilient Content Loader
     */
    getContent: function(url) {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            const cacheBuster = `?t=${new Date().getTime()}`;
            xhr.open('GET', url + cacheBuster, true);
            
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    const isSuccess = xhr.status === 200 || (xhr.status === 0 && xhr.responseText.length > 0);
                    
                    if (isSuccess) {
                        resolve(xhr.responseText);
                    } else {
                        const internalTemplate = document.getElementById(url.replace('./', ''));
                        if (internalTemplate) {
                            resolve(internalTemplate.textContent.trim());
                        } else {
                            resolve(this.getErrorTemplate(url, xhr.status));
                        }
                    }
                }
            };

            xhr.onerror = () => {
                const internalTemplate = document.getElementById(url.replace('./', ''));
                if (internalTemplate) {
                    resolve(internalTemplate.textContent.trim());
                } else {
                    resolve(this.getSecurityErrorTemplate(url));
                }
            };

            xhr.send();
        });
    },

    getErrorTemplate: function(url, status) {
        return `<div class="error-notice">
            <h3>File Not Found (Status: ${status})</h3>
            <p>The browser requested <strong>${url}</strong> but the system returned an error.</p>
        </div>`;
    },

    getSecurityErrorTemplate: function(url) {
        return `<div class="error-notice">
            <h3>CORS / Security Block</h3>
            <p>Your browser blocked the request for <strong>${url}</strong>.</p>
        </div>`;
    },

    loadPage: async function(id) {
        this.currentPage = id;
            this.renderTopNav();
        const page = this.pages[id];
        const main = document.getElementById('main-content');
        
        // Hide search results on navigate
    document.getElementById('search-results').style.display = 'none';

    main.innerHTML = `
        <h1 class="dynamic-title">${page.title}</h1>
        <p class="subtitle">${page.subtitle}</p>
        <div id="page-body">Loading...</div>
    `;
    
    const body = document.getElementById('page-body');
    const rawContent = await this.getContent(page.url);

    body.innerHTML = page.type === "markdown" ? 
        `<div class="md-container">${marked.parse(rawContent)}</div>` : 
        `<div class="pure-html-section">${rawContent}</div>`;

    const contentLinks = main.querySelectorAll('a');
    contentLinks.forEach(link => {
        const destination = link.getAttribute('href');
        
        // If the href matches one of your page IDs (e.g., 'setup', 'specs')
        if (this.pages[destination]) {
            link.onclick = (e) => {
                e.preventDefault(); // Stop the '#' or refresh
                this.loadPage(destination);
            };
        }
    });

    this.generateNavigation();
    main.scrollTo(0, 0);
    },

    generateNavigation: function() {
        const navContainer = document.getElementById('auto-nav');
        const contentArea = document.getElementById('main-content');
        // Scans both MD-generated and pure-HTML headings
        const headings = contentArea.querySelectorAll('h2, h3, h4, h5, h6');
        
        navContainer.innerHTML = ''; 
        const treeRoot = { children: [], level: 1 };
        let lastNodes = { 1: treeRoot };

        headings.forEach((heading, index) => {
            const title = heading.textContent.trim();
            const level = parseInt(heading.tagName.substring(1));
            
            if (this.config.excludeFull.includes(title) || this.config.excludeOnly.includes(title)) return;

            heading.id = `nav-${this.currentPage}-${index}`;
            const node = { title, id: heading.id, level, children: [] };
            
            let parentLevel = level - 1;
            while (parentLevel > 0 && !lastNodes[parentLevel]) parentLevel--;
            
            const parent = lastNodes[parentLevel] || treeRoot;
            parent.children.push(node);
            lastNodes[level] = node;
            for (let i = level + 1; i <= 6; i++) delete lastNodes[i];
        });

        this.renderToCTree(treeRoot.children, navContainer);
    },

    renderToCTree: function(nodes, container) {
        nodes.forEach(node => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            const nodeDiv = document.createElement('div');
            nodeDiv.className = 'toc-node';

            if (node.children.length > 0) {
                const toggle = document.createElement('div');
                toggle.className = 'toggle-btn';
                toggle.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
                toggle.onclick = (e) => { e.stopPropagation(); li.classList.toggle('collapsed'); };
                nodeDiv.appendChild(toggle);
            } else {
                const spacer = document.createElement('div');
                spacer.style.width = '22px';
                nodeDiv.appendChild(spacer);
            }

            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = `#${node.id}`;
            a.textContent = node.title;
            nodeDiv.appendChild(a);
            li.appendChild(nodeDiv);

            if (node.children.length > 0) {
                const subUl = document.createElement('ul');
                subUl.className = 'sub-nav';
                this.renderToCTree(node.children, subUl);
                li.appendChild(subUl);
            }
            container.appendChild(li);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());