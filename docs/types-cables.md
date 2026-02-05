Since we need a medium to send and receive data, we will be discussing the next imortant thing that one needs to establish a link: Cables. Cause one simply cannot just use the transceivers and deem the link to be establish (unless the use radio/wireless transceivers, which we are not discussing yet).

Just like we discussed in [Types of Transceivers](types_t), that there are different types of transceivers w.r.t. form factor, speeds, standards etc. there are different types of cables to facilitate and the requirements of the transceivers, distance, speed, loss, reliance etc.

<h3 style="margin-bottom: 0.25px;">Based on Type</h3>
From the point of view of the port, modules and cables can be classified as either active or passive.
<ol style="margin-top: 0.25px;">
    <li> Active Cables</li> 
    <li> Passive Cables</li>
</ol>

<h4 style="margin-bottom: 0.25px;">Active Cables</h4>
Active cables and modules contain transmitters that regenerate the bit signals over the cable. All optical modules are active. 10/100/1000BaseT and 10GBaseT are active modules and contain an onboard PHY that handles the BaseT autonegotiation and TX/RX to the remote BaseT device. For active modules, the port only has to provide a TX signal with a base level of power to the module, and the module uses the power it receives on the port power bus to regenerate the signal to the remote side.
<br>Although some copper cable assemblies are active, they are extremely rare.

<h4 style="margin-bottom: 0.25px;">Passive Cables</h4>
Passive cables (copper DACs) directly connect the port side of the module to the copper twinax media on the other side of the module in the assembly. The port TX lines provide the power to drive the signal to the remote end. The port goes through a training sequence with the remote end port to tune the power TX and RX parameters to optimize the received signal and ensure correct clock and data recovery at each RX end.

<h3 style="margin-bottom: 0.25px;">Based on Materials</h3>
The "material" corresponds to the type of material used inside the cable: 
<ol style="margin-top: 0.25px;">
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
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><span id="smf"><strong>SMF</strong></span><br>Single Mode Fiber</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">These cable have a very narrow core, carry one signal and are designed for low-loss and is used for long distance ranges.</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">~9</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">1310 (O Band)/<br>1550 (C Band)</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #fdcf55;"><strong>OS1<br><br>(Yellow)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: blue; color: white;">- LC/dual-LC<br><b>(UPC:blue)</b></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>Lasers</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Heavy polymer jacket, for indoor applications.<br>High attenuation.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 10km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G</td>
            <td rowspan="7" style="border: 1px solid #ddd; padding: 5px;">No</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #fdcf55;"><strong><span id="os2">OS2</span><br><br>(Yellow)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: green; color: white;">- LC/dual-LC<br><b>(APC:green)</b><br><br>- MPO<br><b>(APC:green)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Loose tube, for outdoor applications.<br>Can stretch without tensing the fiber.<br>Low attenuation.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">SMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 200km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/40/100G</td>
        </tr>
        <tr>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><span id="mmf"><strong>MMF</strong></span><br>Multi Mode Fiber</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Multi Mode Fibers, are ones with a wider core, 50-10 0microns, are designed for cost-effective, short distance, high-bandwidth data transmission.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">62.5</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px;">850</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: orange;"><strong><span id="om1">OM1</span><br><br>(Orange)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #DDBD9E;">- LC/dual-LC<br><b>(UPC:beige)</b><br><b>(PC:beige) <u>[preferred]</u></b><br><br>- MPO<br><b>(UPC:beige)</b><br><b>(PC:beige) <u>[preferred]</u></b></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>LEDs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Large Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">30-275m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">100M,1/10G<sup>*</sup></td>
        </tr>
        <tr>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px;">50</td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: orange;"><strong><span id="om2">OM2</span><br><br>(Orange)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: black; color: white">- LC/dual-LC<br><b>(UPC:black)</b><br><b>(PC:black) <u>[preferred]</u></b><br><br>- MPO<br><b>(APC:black)</b><br><b>(PC:black) <u>[preferred]</u></b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Small Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">82-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G<sup>**</sup></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #2ed9ed;"><strong><span id="om3">OM3</span><br><br>(Aqua)</strong></td>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: #2ed9ed;">- LC/dual-LC<br><b>(APC:green (UPC:aqua)</b><br><br>- MPO<br><b>(APC:green (UPC:aqua)</b></td>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px;"><strong>VCSELs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">100-300m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40G<sup>***</sup></td>
        </tr>
        <tr>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: #2ed9ed; --color2: #6e00b9;"><strong><span id="om4">OM4</span><br><br>(Aqua/Violet)</strong></td>
            <td class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: #2ed9ed;">- LC/dual-LC<br><b>(APC:green (UPC:aqua)</b><br><br>- MPO<br><b>(APC:green (UPC:aqua/magenta<wbr>/violet)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40/100G<sup>****</sup></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; background-color: #5abd4b;"><strong><span id="om5">OM5</span><br><br>(Lime Green</strong></td>
            <td rowspan="2"  class="two-color-cell" style="border: 1px solid #ddd; padding: 5px; --color1: green; --color2: #5abd4b;">- LC/dual-LC<br><b>(APC:green)<br>(UPC:lime-green)</b><br><br>- MPO<br><b>(APC:green)<br>(UPC:lime-green)</b></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Supports SWDM.<br>High B/W and used in high speed DCs.<br><strong>Used in <a href="#" onclick="app.loadPage('types_conn', 'mpo-mtp'); return false;">MMF-MPO</a>.<strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-440m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">10/40/100/<br>200/400G<sup>*****</sup></td>
        </tr>
    </tbody>
</table>

OM1 and OM2 old, so use PC or UPC connectors.

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
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Passive DAC*</strong></td>
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

*The IEEE 802.3by spec has 3 different 25G cable types (CA-N, CA-S, CA-L), which are aligned to 3 different loss classification categories and have a minimum FEC requirement.
[CA-N 12.98dB loss the highest grade, and no FEC is required]
[CA-S 16.48dB loss the middle grade, and BASE-R or RS FEC is required]
[CA-L 22.48dB loss the lowest grade, and RS FEC is required]

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

<br>
<br>

---
<h3 style="margin-bottom: 0.25px;">References</h3>
Content on this page is a combination of original write-up + inspiration from the below mentioned places:
<ol style="margin-top: 0.25px;">
    <li><a target="_blank" rel="noopener noreferrer" href="https://stordis.com/understanding-dac-aoc-and-aec-cables/">Understanding DAC/AOC/AEC Cables</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.omnitron-systems.com/blog/single-mode-vs-multimode-fiber-cable-a-direct-comparison-of-features-and-cost">SMF-vs-MMF</a></li>
    <li>Differences between [OS1-2, OM1-5]: <a target="_blank" rel="noopener noreferrer" href="https://www.cablesandkits.com/learning-center/difference-between-os2-om1-om2-om3-om4-om5/">[a]</a><a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/sg/blog/multimode-fiber-types-om1-vs-om2-vs-om3-vs-om4-vs-om5-1338.html">[b]</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.thefoa.org/tech/ColCodes.htm">Cables and Connectors Color Codes</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/blog/understanding-polarity-in-mtpmpo-system-948.html">Understanding Polarities in MPO/MTP Cables</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.lightoptics.co.uk/blogs/news/why-need-to-understanding-fiber-connectors-upc-vs-apc">Understanding UPC-vs-APC Connectors</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://edgeoptic.com/kb_article/mtp-mpo-cables-all-basics-you-need-to-know/">/MTP MPO Cables All Basics You Need To Know</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://docs.nvidia.com/networking-ethernet-software/cumulus-linux-43/Monitoring-and-Troubleshooting/Troubleshooting-Network-Interfaces/Troubleshoot-Layer-1/">Troubleshooting Layer-1</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.arista.com/assets/data/pdf/Arista25G_TC_QA.pdf">Arista 25G Cables FAQ</a></li>
</ol>