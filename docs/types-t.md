<h3 style="margin-bottom: 0.25px;">Based on medium-of-communication</h3>
There are two main types of optics/transceivers based on medium-of-communication: (1) Copper (2) Optical

The medium corresponds to the type of communication channel does one want to us, copper? or optical? 
<ol>
    <li> Copper </li>
    <ul>
        <li> Simply transmit electrical signals. </li>
        <li> Used with copper ethernet cables. </li>
        <li> Unfortunately, the range of this optic type is limited to the range of how long ethernet can go, around 100 meters, before we see collisions. </li>
        <li> We can get decent speeds: 1G/10G. </li>
        <li> Susceptible to EMI. </li>
    </ul>
    <li> Optical </li>
    <ul>
        <li> Convert electrical signals to light pulses and back. </li>
        <li> Used with fiber optic cables. </li>
        <li> Is capable of working for short-long haul communciations, (100m to 100+ km). </li>
        <li> Lightning fast (literally, light speed, lol) bandwidth possibilities. (1G to 1.6Tbps ++). </li>
        <li> But, can be expensive (nothing comes without tradeoffs). </li>
        <li> EMI-proof. </li>
    </ul>
</ol>

<h3 style="margin-bottom: 0.25px; "><span id="types-t_based-on-ff">Based on form factor</span></h3>
The form factor, of the pluggable transceiver, determines the physical size and interface of the transceiver. This essentially influences the compatibility with networking equipment, and the speed it can run on.

<table style="width: 100%; border-collapse: collapse;">
        <thead>
            <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 20%;">Form Factor (Pluggable)</th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 20%;">Form Factor Types</th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 10%;">Rates/Speed</th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Description</th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left;">Connector Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Gigabit Interface Converter</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>GBIC</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">1G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Older, larger form factor, replaced by SFP</td>
                <td style="border: 1px solid #ddd; padding: 5px;">SC</td>
            </tr>
            <tr>
                <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Small Form Factor</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SFP</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">1G/2.5/4G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Compact, hot-pluggable for Gigabit networks</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SFP+</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">10G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Enhanced version of SFP for 10G networks</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SFP25</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;"></td>
                <td style="border: 1px solid #ddd; padding: 5px;"></td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SFP28</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">25G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">An SFP type for 25G networks</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SFP56</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">50G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">An SFP type for 50G networks, compatible with SFP28/SFP+ (25 and 10G)</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>X Form Factor</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>XFP</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">10G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">An alternative to SFP+ for 10G, but larger than SFP+</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Quad Small Form Factor</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>QSFP+</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">40G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Quad-channel design for high-density 40G deployments</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>QSFP25</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">100G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Industry standard for 100G Ethernet</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC/MPO</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>QSFP28</strong></td>
                <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">100/200G</td>
                <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">Industry standard for 100G Ethernet, uses 4x28G or 4x56G lanes.</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC/MPO</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>QSFP56</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC/MPO</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>QSFP(56/112)-DD</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">400/800G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">A double density (x8 QSFP) pluggable for 400/800G networks.<br>Can offer longer reach via DCO.</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC/MPO</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>Octal Small Form Factor</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>OSFP</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">400G/800G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">An octal density pluggable for way faster networks, not backwards compatible with QSFP, draws high power.<br>Can offer longer reach via DCO.</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC/MPO</td>
            </tr>
            <tr>
                <td rowspan="3" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>C (100) Form-factor Pluggable</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>CFP</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">100G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Early form for 100G, but larger than QSFP+</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>CFP2</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">400G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Mainly used in metro telco networks.<br>Can offer longer reach via DCO.</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
            <tr>
                <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>CFP4</strong></td>
                <td style="border: 1px solid #ddd; padding: 5px;">100G</td>
                <td style="border: 1px solid #ddd; padding: 5px;">Smaller than CFP/CFP2, but less common than QSFP28 (for 100G).</td>
                <td style="border: 1px solid #ddd; padding: 5px;">LC</td>
            </tr>
        </tbody>
    </table>

<h3 style="margin-bottom: 0.25px;"><span id="types-t_based-on-rng-spd">Based on Range and Speeds</span></h3>
In association with the above mentioned types, not all types of optics (of diff mediums or speeds) can be used for all ranges of communcations. Range is referring to the length/distance a signal needs to traverse before reaching the other end of the link. Here's the types of transceiver range standards based on their speeds.<br>
Most of these names, will be in this format "<b style="color: #daa909ff">X</b><b style="color: #da3609ff">Y</b><b style="color: #09dad0ff">Z</b>" where:
<ul>
    <li> <b style="color: #daa909ff">X</b>: Media Type of the wavelength (if it is fiber) </li>
    <ul>
        <li>C == Copper (twin-ax)</li>
        <li>T == Twisted Pair</li>
        <li>S == Short (850nm)</li>
        <li>L == Long (1310nm)</li>
        <li>E == Extended (1550nm)</li>
        <li>Z == Ultra Extended (1550nm)</li>
    </ul>
    <li> <b style="color: #da3609ff">Y</b>: PHY encoding type </li>
    <ul>
        <li>R == LAN PHY (64B/66B)</li>
        <li>X == LAN PHY (8B/10B)</li>
        <li>W == WAN PHY(*) (64B/66B)</li>
    </ul>
    <li> <b style="color: #09dad0ff">Z</b>: # of WWDM wavelengths or XAUI lanes </li>
    <ul>
        <li>1 == If ommitted, Serial</li>
        <li>4 == WWDM wavelengths or XAUI lanes</li>
    </ul>
</ul>

<ol>
    <li> 1000M (1G) </li>
    <ul>
        <li> <b>SX - Short Wavelength</b> – these transceivers are optimized for transmission via multimode fiber (MMF) via the 850 nm wavelength over short distances of up to 550 meters and are used in LAN and data center applications. </li>
        <li> <b>FX – Fast Ethernet</b> – refers to an Ethernet network standard, with transceivers designed to operate at 100Mbps over short distances in local area networks. </li>
        <li> <b>LX – Long Wavelength</b> – operating in the long wavelength range of 1310 nm over singlemode fiber, LX transceivers can typically support a reach of up to 10 km and are used in a wide range of network environments, including data centers. Enterprise networks and telecommunications. </li>
        <li> <b>EX – Extended Wavelength</b> – EX transceivers operate at different wavelengths over singlemode fiber and the standard varies among different vendors, typically they use the 1310 nm wavelength and are able to translmit up to 40 km. </li>
        <li> <b>ZX – Also known as “Extended Wavelength”</b> – are optimized for transmission via singlemode fiber at 1550 nm over long-distances up to 80 km and are used in long-haul telecoms networks, metropolitan areas, etc. </li>
    </ul>
    <li> Speeds Greater than 1G </li>
    The designations SR, LR and ER were defined by the IEEE, whereas DR and FR where defined by the MSA group of vendors to ensure compatibility.
    <ul>
        <li> <b>VSR - Very Short Range</b> </li>
        <li> <b>SR – Short Range</b> – designed for short-distance transmissions, <=2km, of up to 550 meters (OM2) and 300 meters (OM3/OM4) over multimode fiber on the 850 nm wavelength, these transceivers are ideal intra-rack or intra-datacenter where low-latency and high bandwidth are called for. </li>
        <li> <b>SRL - Short Range Lite</b> </li>
        <li> <b>SR4 – Short Range 4 channel</b> – mostly used in 40G and 100G applications with a maximum range of 100 meters over multimode fiber(?) at 850 nm. </li>
        <li> <b>SR8 – Short Range 8 channel</b> – these transceivers support 8 x 50G channels resulting in a data rate of 400G on OM4 multimode fiber. With a range of up to 100 meters they are used in data center applications, cloud computing and for big data. </li>
        <li> <b>DR - Duplex Reach</b> - insert text </li>
        <li> <b>LR – Long Range Transceivers</b> – are optimized for longer distances from 10 km to 40 km over singlemode fiber using the 1310 nm wavelength and are used for inter-rack connections and connecting between buildings and across metropolitan areas. </li>
        <li> <b>LRL - Long Range Lite</b> </li>
        <li> <b>LR4 – Long Range 4 Channels</b> – transceivers designed for distances up to 10 km. The transceiver converts 4 x 25 G channels into optical signals to be sent over a single 100G fiber. </li>
        <li> <b>LR4-20</b> – long range transceivers transmit 4 x 25G channels over 100G singlemode fiber up to 20 kilometers. </li>
        <li> <b>LR8 – Long Range 8 Channels</b> – these transceivers are dsigned to transmit 8 x 50G channels with a combined data rate of 400G over singlemode fiber up to 10 km. </li>
        <li> <b>ER – Extended Range</b> – transceivers are designed for distances beyond those of LR transceivers. ER transceivers can cover distances of between 40 km and 80 km over single mode fiber on the 1550 nm wavelength. Used in applications such as metro networks and long-haul telecommunications, they support data rates from 40G to 100G. </li>
        <li> <b>ER4</b> – these transceiver modules transmit to distances of up to 40 km via single mode fiber using DWDM on 4 channels (1295 nm, 1300 nm, 1305 nm, 1310 nm). </li>
        <li> <b>ER8</b> – extended reach transceiver modules are designed for transmitting 400G to a distance of up to 40 km over dual single mode fiber using 8 x 50G channels. </li>
        <li> <b>ZR/ZR+ – ZR stands for “Zero Dispersion Shifted Range”</b> – designed for long-distance connections from 40km up to 80 km (ZR+) between cities and different regions at 100G. Some of the latest transceivers, such as the 400G QSFP-DD ZR+ have a range of up to 480 km. </li>
        <li> <b>BIDI(4) - Bi-directional</b> - insert text </li>
        <li> <b>PLR4 - Parallel LR4</b> - insert text </li>
        <li> <b>PLR4L - Parallel LR4 Lite</b> - insert text </li>
        <li> <b>UNIV(4) - Short reach Universal</b> - insert text </li>
        <li> <b>FR - (lambda)</b> - insert text </li>
        <li> <b>XR - </b> - insert text </li>
    </ul>
</ol>

<h3 style="margin-bottom: 0.25px;">Based on DWM</h3>
It has been found that CWDM/DWDM modules enable longer distances through wavelength division multiplexing. Allows multiple signals to be transmitted simultaneously over a single fiber:​

- CWDM (Coarse Wavelength Division Multiplexing): Uses wider wavelength spacing; cost-effective for short to medium distances.​
- DWDM (Dense Wavelength Division Multiplexing): Uses narrow wavelength spacing; suitable for long-distance and high-capacity networks.

[sources <sup><a href="https://resources.l-p.com/knowledge-center/optical-module-classification">[2]</a><a href="https://www.prooptix.com/news/guide-to-optical-transceiver-standards/">[3]</a><a href="https://www.viksnewsletter.com/p/a-complete-guide-to-optical-transceiver-nomenclature/">[4]</a></sup>]

