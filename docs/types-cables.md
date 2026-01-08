Since we need a medium to send and receive data, we will be discussing the next imortant thing that one needs to establish a link: Cables. Cause one simply cannot just use the transceivers and deem the link to be establish (unless the use radio/wireless transceivers, which we are not discussing yet).

Just like we discussed in [Types of Transceivers](types_t), that there are different types of transceivers w.r.t. form factor, speeds, standards etc. there are different types of cables to facilitate and the requirements of the transceivers, distance, speed, loss, reliance etc.

<h3 style="margin-bottom: 0.25px;">Based on Materials</h3>
The "material" corresponds to the type of material used inside the cable: 
<ol>
    <li> Optical Fiber Cables</li> 
    <li> Copper Cables</li>
</ol>

<h4 style="margin-bottom: 0.25px;">Optical Fiber Cables</h4>
Here we will be discussing the types of optical cables:
<table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; width: 12%;">Cable Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 20%">Description</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 4%;">Core<br>(µm)</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Wavelength<br>(nm)</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 4%;">Sub-Type<br>(Color)</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Connector Type(s)<sup>+</sup> (Color)</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 5.5%;">Transmitters</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 13%;">Characteristics</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 6%;">Range</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 3%;">Speed (Gbps)</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Trasnceiver Attached?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>AOC</strong><br>Active Optical Cable</td>
            <td style="border: 1px solid #ddd; padding: 5px;">AOC cables use optical fiber instead of copper and have active transceivers at both ends, converting electrical signals to optical signals and back.</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; color: white; background-color: black;"><strong>-<br><br>(Black)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">-</td>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>LEDs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Lighter in weight.<br>Long distance range.<br>Supports higher data rates</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 100m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">10/25/40/100++</td>
            <td style="border: 1px solid #ddd; padding: 5px;">Yes</td>
        </tr>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SMF</strong><br>Single Mode Fiber</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">These cable have a very narrow core, carry one signal and are designed for low-loss and is used for long distance ranges.</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">~9</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">1310/1550</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: yellow;"><strong>OS1<br><br>(Yellow)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: blue; color: white;">- LC/dual-LC<br><b>(UPC:blue)</b></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>Lasers</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Heavy polymer jacket, for indoor applications.<br>High attenuation.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 10km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G</td>
            <td rowspan="7" style="border: 1px solid #ddd; padding: 5px;">No</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: yellow;"><strong><span id="os2">OS2</span><br><br>(Yellow)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: green; color: white;">- LC/dual-LC<br><b>(APC:green)</b><br><br>- MPO<br><b>(APC:green)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Loose tube, for outdoor applications.<br>Can stretch without tensing the fiber.<br>Low attenuation.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">SMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 200km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/40/100G</td>
        </tr>
        <tr>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>MMF</strong><br>Multi Mode Fiber</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Multi Mode Fibers, are ones with a wider core, 50-10 0microns, are designed for cost-effective, short distance, high-bandwidth data transmission.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">62.5</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px;">850</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: orange;"><strong><span id="om1">OM1</span><br><br>(Orange)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #DDBD9E;">- LC/dual-LC<br><b>(APC:beige)</b><br><br>- MPO<br><b>(APC:beige)</b></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>LEDs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Large Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">30-275m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">100M,1/10G<sup>*</sup></td>
        </tr>
        <tr>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px;">50</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: orange;"><strong><span id="om2">OM2</span><br><br>(Orange)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: black; color: white">- LC/dual-LC<br><b>(APC:black)</b><br><br>- MPO<br><b>(APC:black)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Small Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">82-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G<sup>**</sup></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: rgba(102, 204, 204, 0.61);"><strong><span id="om3">OM3</span><br><br>(Aqua)</strong></td>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: rgba(102, 204, 204, 0.61);">- LC/dual-LC<br><b>(APC:green (UPC:aqua)</b><br><br>- MPO<br><b>(APC:green (UPC:aqua)</b></td>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px;"><strong>VCSELs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">100-300m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40G<sup>***</sup></td>
        </tr>
        <tr>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: rgba(102, 204, 204, 0.61); --color2: violet;"><strong><span id="om4">OM4</span><br><br>(Aqua/Violet)</strong></td>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: rgba(102, 204, 204, 0.61);">- LC/dual-LC<br><b>(APC:green (UPC:aqua)</b><br><br>- MPO<br><b>(APC:green (UPC:aqua/magenta<wbr>/violet)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40/100G<sup>****</sup></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #32CD32;"><strong><span id="om5">OM5</span><br><br>(Lime Green</strong></td>
            <td rowspan="2"  class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: #32CD32;">- LC/dual-LC<br><b>(APC:green)<br>(UPC:lime-green)</b><br><br>- MPO<br><b>(APC:green)<br>(UPC:lime-green)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Supports SWDM.<br>High B/W and used in high speed DCs.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-440m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">10/40/100/<br>200/400G<sup>*****</sup></td>
        </tr>
    </tbody>
</table>

<sup>+</sup>: Listed in this page are the most common connector types used, there might be other less common connectors as well<br> AND ALSO MANUF CAN SOMETIMES USE GREEN/BLUE for APC/UPC MPOs as well. and they can also diverge from the color scheme. No standardization.
CONFIRM IF THERE IS LC APC IN MPO or not
<sup>*</sup>: 10G-30m
<sup>**</sup>: 10G-82m
<sup>***</sup>: 100G-300m, 40G-100m
<sup>****</sup>: 10G-550m, 40G-150m
<sup>*****</sup>: 100/200/400G-150m, 40G-440m

<h4 style="margin-bottom: 0.25px;">Copper Cables</h4>
Here we will be discussing the types of copper cables:
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 12%;">Cable Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 8%;">Sub-Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Description</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 6%;">Range</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 10%;">Speed (Gbps)</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Trasnceiver Attached?</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Connector Type</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>DAC</strong><br>Direct Attach Copper</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Passive DAC</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Often used for short-range, high-speed connections, passive DAC relies on the electrical power from the host equipment, supporting short distances.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 7m</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">10/25/40/100++</td>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px;">Yes</td>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px;">-</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Active DAC</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Often used for short-range, high-speed connections, active DAC includes signal processing electronics in the transceivers to improve signal quality, allowing for longer reach</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 15m</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>AEC</strong><br>Active Electric Cables</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">AEC cables are similar to DACs but with built-in signal amplification and conditioning. They combine the simplicity of electrical transmission with the added distance benefits provided by the active components.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 5m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 400</td>
        </tr>
    </tbody>
</table>

<h3 style="margin-bottom: 0.25px;">How to choose the right cable?</h3>
If you are network designer like "a child in front of 100 icecream flavors", you will surely be confused with what cables to choose for a link.

This mostly boils down to various factors:
<ol>
    <li>Cost</li>
    <li>Speed</li>
    <li>Distance</li>
    <li>Reliability</li>
    <li>Breakout Capabilities</li>
    <li>Fault Tolerance</li>
    <li>Ease of Management, etc.</li>
</ol>

This is discussed in detail in [How to choose the right media?](choose-right)


[sources <sup><a href="https://stordis.com/understanding-dac-aoc-and-aec-cables/">[1]</a><a href="https://www.omnitron-systems.com/blog/single-mode-vs-multimode-fiber-cable-a-direct-comparison-of-features-and-cost">[2]</a></sup>]
https://www.cablesandkits.com/learning-center/difference-between-os2-om1-om2-om3-om4-om5/
https://www.thefoa.org/tech/ColCodes.htm
https://www.fs.com/blog/comparison-between-os1-and-os2-smf-cables-2695.html
https://www.fs.com/sg/blog/multimode-fiber-types-om1-vs-om2-vs-om3-vs-om4-vs-om5-1338.html
https://www.fs.com/blog/understanding-polarity-in-mtpmpo-system-948.html
https://www.lightoptics.co.uk/blogs/news/why-need-to-understanding-fiber-connectors-upc-vs-apc