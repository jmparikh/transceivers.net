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
            title: "Architecture & Core",
            subtitle: "System overview and structural guidelines.",
            type: "markdown", // Treat as Markdown; Marked.js handles embedded HTML automatically
            url: "./home.md" 
        },
        specs: {
            title: "Technical Specs",
            subtitle: "Deep dive into API and Database schemas.",
            type: "markdown",
            url: "./specs.md"
        },
        setup: {
            title: "Setup Guide",
            subtitle: "Instructions for local development.",
            type: "html",
            url: "./setup.html"
        }
    },

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
        
        this.renderMasterNav();
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
        const page = this.pages[id];
        const main = document.getElementById('main-content');
        
        document.getElementById('page-header-title').textContent = page.title;
        this.renderMasterNav(); 

        main.innerHTML = `<p class="subtitle">${page.subtitle}</p><div id="page-body">Loading content...</div>`;
        const body = document.getElementById('page-body');

        const rawContent = await this.getContent(page.url);

        /**
         * HYBRID HANDLING LOGIC:
         * If the type is "markdown", Marked.js will parse the MD 
         * and leave the HTML tags as they are.
         */
        if (page.type === "markdown") {
            // marked.parse handles raw HTML by default
            body.innerHTML = `<div class="md-container">${marked.parse(rawContent)}</div>`;
        } else {
            // pure-html-section handles non-markdown files
            body.innerHTML = `<div class="pure-html-section">${rawContent}</div>`;
        }

        // Always run ToC generation after content is injected
        this.generateNavigation();
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