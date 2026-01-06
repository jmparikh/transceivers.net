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
        <th style="border: 1px solid #ddd; padding: 5px;">Description</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 5%;">Core<br>(µm)</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Wavelength<br>(nm)</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 3.5%;">Sub-Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 5.5%;">Transmitters</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Characteristics</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 6%;">Range</th>
        <th style="border: 1px solid #ddd; padding: 5px; width: 3%;">Speed (Gbps)</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Trasnceiver Attached?</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Connector Type</th>
        <th style="border: 1px solid #ddd; padding: 5px;">Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>AOC</strong><br>Active Optical Cable</td>
            <td style="border: 1px solid #ddd; padding: 5px;">AOC cables use optical fiber instead of copper and have active transceivers at both ends, converting electrical signals to optical signals and back.</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>-</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>LEDs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Lighter in weight.<br>Long distance range.<br>Supports higher data rates</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 100m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">10/25/40/100++</td>
            <td style="border: 1px solid #ddd; padding: 5px;">Yes</td>
            <td style="border: 1px solid #ddd; padding: 5px;">-</td>
            <td style="border: 1px solid #ddd; padding: 5px;">Black</td>
        </tr>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>SMF</strong><br>Single Mode Fiber</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">These cable have a very narrow core, carry one signal and are designed for low-loss and is used for long distance ranges.</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">~9</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">1310/1550</td>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OS1</strong></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>Lasers</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Heavy polymer jacket, for indoor applications.<br>High attenuation.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 10km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G</td>
            <td rowspan="7" style="border: 1px solid #ddd; padding: 5px;">No</td>
            <td rowspan="7" style="border: 1px solid #ddd; padding: 5px;">LC/dual-LC</td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">Yellow</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OS2</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">Loose tube, for outdoor applications.<br>Can stretch without tensing the fiber.<br>Low attenuation.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">upto 200km</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/40/100G</td>
        </tr>
        <tr>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px; vertical-align: top;"><strong>MMF</strong><br>Multi Mode Fiber</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px;">Multi Mode Fibers, the <font color="orange">orange</font> or <font color="blue">teal</font> cables, are ones with a wider core, 50-10 0microns, are designed for cost-effective, short distance, high-bandwidth data transmission.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">62.5</td>
            <td rowspan="5" style="border: 1px solid #ddd; padding: 5px;">850</td>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OM1</strong></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;"><strong>LEDs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Large Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">30-275m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">100M,1/10G<sup>*</sup></td>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px;">Orange</td>
        </tr>
        <tr>
            <td rowspan="4" style="border: 1px solid #ddd; padding: 5px;">50</td>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OM2</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Slower.<br>Cost Effective for short runs.<br>Small Core.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">82-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10G<sup>**</sup></td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OM3</strong></td>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px;"><strong>VCSELs</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">100-300m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40G<sup>***</sup></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Aqua</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OM4</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Higher Modal B/W.<br>Longer transmissions.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-550m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">1/10/40/100G<sup>****</sup></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Aqua/Violet</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px;"><strong>OM5</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Supports SWDM.<br>High B/W and used in high speed DCs.</td>
            <td style="border: 1px solid #ddd; padding: 5px;">150-440m</td>
            <td style="border: 1px solid #ddd; padding: 5px;">10/40/100/<br>200/400G<sup>*****</sup></td>
            <td style="border: 1px solid #ddd; padding: 5px;">Line Green</td>
        </tr>
    </tbody>
</table>

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