So, now that we have had a chance to go through the [Types of Transceivers](types_t), [Types of Cables](types_cables), let's talk about how both of these things can connect to each other. Just like we have standardized form-factors, cables, etc.. we also have standardized connectors.

<h3 style="margin-bottom: 0.25px;">Based on type of transceiver</h3>
<h4 style="margin-bottom: 0.25px;">Optical Transceivers</h4>
These fiber optic connectors, listed here are the most commonly used ones, which are introduced based on their popularities from wide to usual:
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 15%;">Connector Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Connector Size (Ferrule<sup>++</sup>)</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 18%;">Connector Contact <sup>+</sup></th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;"># of Pins/<br>Fibers</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Description</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 3%">Used in</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 10%">Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>LC</strong><br>Lucent Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">1.25mm</td>
            <td rowspan="6" style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left">
                <strong><span style="background-color: green; color: white;">APC</span></strong> - Angled Polished/Physical Connector<br>Has an 8° angle, to help reduce back reflection. (Green)<br><br>
                <strong><span style="background-color: black; color: white;">PC</span></strong> - Polished/Physical Connector. (Black)<br><br>
                <strong><span style="background-color: blue; color: white;">UPC</span></strong> - Ultra Polished/Physical Connector. (Blue)</td> 
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">High-density connections, SFP/SFP+/XFP transceivers. Duplex LC is comparable in size to RJ-45.</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td rowspan="8" style="border: 1px solid #ddd; padding: 5px;">Depends on what connector is used with what kind of cable. Refer to [Types of Cables](types_cables) for mor detals about per-cable/connector color</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SC</strong><br>Standard Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">2.5mm</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Datacom and telecom (most widely deployed)</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong><sup>*</sup><span id="mpo-mtp">MPO/MTP</span></strong><br>Multiple Fiber Push-On</td>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">6.4x2.5mm</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>8</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Can transmit the same data rates as 12-fiber cables with lower cost and insertion loss, making them more cost-effective.</td>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px;">SMF (<b><a href="#" onclick="app.loadPage('types_cables', 'os2'); return false;">OS2</a></b>)<br><br>MMF (<b><a href="#" onclick="app.loadPage('types_cables', 'om1'); return false;">OM1</a></b>, <b><a href="#" onclick="app.loadPage('types_cables', 'om2'); return false;">OM2</a></b>, <b><a href="#" onclick="app.loadPage('types_cables', 'om3'); return false;">OM3</a></b>, <b><a href="#" onclick="app.loadPage('types_cables', 'om4'); return false;">OM4</a></b>, <b><a href="#" onclick="app.loadPage('types_cables', 'om5'); return false;">OM5</a></b>)</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>12</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">These are the earliest developed, most commonly used solution in 10/40/100G connections.<br>If they are used in 40G QSFP+ or 100G QSFP28 transceivers, 4 fibers will be idle, resulting in low fiber utilization.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>16</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">These cables use the same external footprint as traditional 12-fiber MT (mechanically transferable) ferrules, aggregate multiple 8-fiber parallel transceivers, and couple directly to emerging 16-fiber parallel fiber links such as 400G QSFP-DD and OSFP.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>24</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>ST</strong><br>Straight Tip</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">2.5mm</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Created and licensed by ATT shortly after FC was introduced.<br>Used mostly in both, long and short distance networks.</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>FC</strong><br>Ferrule Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">2.5mm</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Preferred in precision instruments like OTDRs.<br>Was also used for telco/datacos, but became less preferred with the introduction of LC/SC</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
    </tbody>
</table>
To dig deeper into other connector types, refer to 2.[a] in the below mentioned references.

<h3 style="margin-bottom: 0.25px;">Based on Connector Contacts (and discussions)</h3>
The ferrule, which is the housing for the exposed end of a fiber, is designed to be connected to another fiber, or a transceiver. When connectors are installed on the end of a fiber, the light signal will be reflected back up the fiber towards the source (tx), hence generating a possibility to disrupt the signal. This is known as back reflection.<br>
To increase the efficiency of fiber and reduce the back reflection, the industry began to upgrade the surface of the critical point of attachment, and that’s how ferrule polish technologies are introduced. There are four connector polish types, three of which will be highlighted below.

<b>To avoid confusion, I will be referring to this connector types as "contacts".</b>

<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 15%;">Contact Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Color</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Desription</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Return Loss</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>PC</strong><br>Physical Contact</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; background-color: black; color: white">Black</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">This contact was introduced to overcome the air gap between two surfaces, caused due to small imperfections in the original flat fiber connector</td>
            <td style="border: 1px solid #ddd; padding: 5px;">-40dB</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>UPC</strong><br>Ultra Physical Contact</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; background-color: blue; color: white">Blue</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">This contact is an improvement of the PC, with a better surface finish after an extended polishing. So, the return loss is better than PC structure</td>
            <td style="border: 1px solid #ddd; padding: 5px;">-50dB</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>APC</strong><br>Angled Physical Contact</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; background-color: green; color: white">Green</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">In pursuit to reduce the back reflection ebven more, this contact was introduced, with an 8° angle.<br>Due to this, the reflected light will leak out into the cladding instead of staying in the fiber core.<br><b>It should be noted that APC connectors should only be mated with other angled-polished connectors rather than non-angled polished connectors, or it will cause very high insertion loss</b>.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">-60dB</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-bottom: 0.25px;">Why do we need different contacts?</h4>
With high speed links, lasers used in the transceivers are bound to get powerful, and which also increases the chances of back reflection and higher insertion loss. And these two things can cause damages to the lasers in the optics. And since it is not that easy to completely avoid these issues, the industry came up with ways to reduce the effects. Contacts are one of them.<br>
<ul>
    <li>Modern connectors typically use a physical contact polish on the fiber and ferrule end. <b>This is a slightly convex surface with the apex of the curve accurately centered on the fiber, so that when the connectors are mated the fiber cores come into direct contact with one another.</b></li>
    <li>Higher grades of polish give less insertion loss and lower back reflection.</li>
    <li>Many connectors are available with the fiber end face polished at an angle to prevent light that reflects from the interface from traveling back up the fiber.</li>
    <li>Because of the angle, the reflected light does not stay in the fiber core but instead leaks out into the cladding.</li>
</ul>

 Note that repeated connections and disconnections will bring about the degradation of the surface and ultimate performance

Example:
<ul>
    <li>Generally angle-polished connectors have higher insertion loss than good quality straight physical contact ones</li>
    <li>The APC angle is normally 8 degrees, however, SC/APC also exists as 9 degrees in some countries.</li>
    <li>"Ultra" quality connectors may achieve comparable back reflection to an angled connector when connected, but an angled connection maintains low back reflection even when the output end of the fiber is disconnected.</li>
</ul>

<h4 style="margin-bottom: 0.25px;">Considerations while using Connectors with special contacts</h4>
<ul>
    <li>Please consider what connectors are present on the cable and what connectors the optics need. Using the cable with an optic, with a connector different from what the optic needs, will cause damages to the cable or the optic.</li>
    <li>Mating to a non-angle polished connector causes very high insertion loss.</li>
    <li>Example: Angle-polished connectors should only be mated to other angle-polished connectors.</li>
</ul>

<h3 style="margin-bottom: 0.25px;">Based on Fiber Counts</h3>
<ol>
    <li>Simplex Fiber Connectors</li>
    <p>A simplex connection means signals are sent in one direction—a signal is transmitted through two simplex connectors and a simplex fiber cable from device A to device B, which cannot return from device B to device A via the same route.<br>A simplex fiber optic connector is often connected with one strand of glass or plastic fiber</p>
    <li>Duplex Fiber Connectors</li>
    <p>A bidirectional transmission can be achieved through duplex connectors and duplex fiber cable.<br>A duplex fiber optic connector needs to connect with two strands of fibers.</p>
</ol>

<h3 style="margin-bottom: 0.25px;">Based on Fiber Modes</h3>
<ol>
    <li><a href="#" onclick="app.loadPage('types_cables', 'smf'); return false;">Single Mode Fibers (SMF)</a>: Single mode fiber allows only one light mode to pass through at a time.</li>
    <li><a href="#" onclick="app.loadPage('types_cables', 'mmf'); return false;">Multimode Fibers (MMF)</a>: Multimode fibers can propagate multiple modes at a time.</li>
</ol>
Since there are tons of connectors available to choose from, for SMF/MMF cables, there will be an impact, on account of the combination with the corresponding type of optical fibers. However, with technologies getting advanced, fiber optic connectors like SC, LC, and FC, provided by fiber optic connector factories are compatible with single mode and multimode fiber cables.

<h3 style="margin-bottom: 0.25px;">Notes</h3>
<ul style="margin-top: 0.25px;">
    <li><sup><b>*</b></sup> The MTP connector is a high performance MPO connector engineered for better mechanical and optical performance.</li>
    <li><sup>++</sup>Ferrule, is a ring or cap, typically a metal one, which strengthens the end of a handle, stick, or tube and prevents it from splitting or wearing.</li>
</ul>

<br>
<br>

---
<h3 style="margin-bottom: 0.25px;">References</h3>
Content on this page is a combination of original write-up + inspiration from the below mentioned places:
<ol style="margin-top: 0.25px;">
    <li><a target="_blank" rel="noopener noreferrer" href="https://web.archive.org/web/20090421090016/http://www.usconec.com/pages/faq/faqfrm.html">MPO/MTP Discussions/FAQ</a></li>
    <li>Optical Fiber Connectors: <a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/blog/how-many-fiber-connector-types-do-you-know-1366.html">[a]</a><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Optical_fiber_connector">[b]</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/blog/pc-vs-upc-vs-apc-connector-selecting-the-right-fiber-connector-type-1453.html">Optical Fiber Connector Contacts (PC/APC/UPC)</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.thefoa.org/tech/ColCodes.htm">Cables and Connectors Color Codes</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.tarluz.com/passive-component/sc-connector-introduction-fiber-connector-introduction/">SC Connector Introduction</a></li>
</ol>