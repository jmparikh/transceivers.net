So, now that we have had a chance to go through the [Types of Transceivers](types_t), [Types of Cables](types_cables), let's talk about how both of these things can connect to each other. Just like we have standardized form-factors, cables, etc.. we also have standardized connectors.

<h3 style="margin-bottom: 0.25px;">Based on type of transceiver</h3>
<h4 style="margin-bottom: 0.25px;">Optical Transceivers</h4>
MPO APC, UPC, etc.. FINISH THIS
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 15%;">Connector Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 20%;">Connector Contact <sup>+</sup></th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;"># of Pins</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Description</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Used in</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>LC</strong><br>Lucent Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">High-density connections, SFP/SFP+/XFP transceivers. Duplex LC is comparable in size to RJ-45.</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Duplex LC</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>2</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SC</strong><br>Standard Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>1</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Datacom and telecom (most widely deployed)</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong><sup>*</sup>MPO/MTP12</strong><br>Multiple Fiber Push-On</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>APC</strong><br>Angled Polished Connector<br>Has an 8° angle, to help reduce back reflection.</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>12</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">SM or MM multi-fiber ribbon. Same ferrule<sup>++</sup> as MT, but more easily reconnectable. Used for indoor cabling and device interconnections. MTP is a brand name for an improved connector, which intermates with MPO.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">SMF</td>
            <td style="border: 1px solid #ddd; padding: 5px;">Green strain relief boot, or a green connector body.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>UPC</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Ultra Polished Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px;">MMF</td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
        </tr>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong><sup>*</sup>MPO/MTP24</strong><br>Multiple Fiber Push-On</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>APC</strong><br>Angled Polished Connector<br>Has an 8° angle, to help reduce back reflection.</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>24</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Green strain relief boot, or a green connector body.</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>UPC</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;"></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Ultra Polished Connector</td>
            <td style="border: 1px solid #ddd; padding: 5px;">MMF</td>
        </tr>
    </tbody>
</table>

<h3 style="margin-bottom: 0.25px;">Discussions about Contacts</h3>
<h4 style="margin-bottom: 0.25px;">Why do we need different contacts?</h4>
With high speed links, lasers used in the transceivers are bound to get powerful, and which also increases the chances of back reflection and higher insertion loss. And these two things can cause damages to the lasers in the optics. And since it is not that easy to completely avoid these issues, the industry came up with ways to reduce the effects. Contacts are one of them.<br>
<ul>
    <li>Modern connectors typically use a physical contact polish on the fiber and ferrule end. <b>This is a slightly convex surface with the apex of the curve accurately centered on the fiber, so that when the connectors are mated the fiber cores come into direct contact with one another.</b></li>
    <li>Higher grades of polish give less insertion loss and lower back reflection.</li>
    <li>Many connectors are available with the fiber end face polished at an angle to prevent light that reflects from the interface from traveling back up the fiber.</li>
    <li>Because of the angle, the reflected light does not stay in the fiber core but instead leaks out into the cladding.</li>
</ul>

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


References:
- <sup>*</sup> The MTP connector is a high performance MPO connector engineered for better mechanical and optical performance.
[sources <sup><a href="https://en.wikipedia.org/wiki/Optical_fiber_connector">[1]</a><a href="https://www.fs.com/blog/how-many-fiber-connector-types-do-you-know-1366.html">[2]</a><a href="https://web.archive.org/web/20090421090016/http://www.usconec.com/pages/faq/faqfrm.html">[3]</a></sup>]
https://www.thefoa.org/tech/ColCodes.htm
https://www.tarluz.com/passive-component/sc-connector-introduction-fiber-connector-introduction/
- [<sup>++</sup> : a ring or cap, typically a metal one, which strengthens the end of a handle, stick, or tube and prevents it from splitting or wearing.]
