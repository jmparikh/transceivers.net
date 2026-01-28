<h2>Multi-Patch Optics</h2>

The MPO cables are the ones which use MTP/MPO connector, and they are multi-innovative, high-performance fiber optic connector that has enhanced optical and mechanical performance. The special design (shown in the following figure) of the MTP/MPO connector ensures the accuracy of the fiber polarity in the MTP/MPO network system.
MPO/MTP conectors are used in multi-fiber cables.

#ADD SOME DESC ABOUT MPO

<h3 style="margin-bottom: 0.25px;">Polatiry</h3>
<h4 style="margin-bottom: 0.25px;">What is polarity and why does it matter in MPO/MTP systems?</h4>
<p>Fiber polatiry is the matching between the transmitting end and the receiving end at both ends of the optical link. Polarity defines the direction in which the optical signal travels in the fiber.</p>
<p>A general optical link requires two optical fibers to complete the entire transmission process. An optic has a receiving end (Rx) and a transmitting end (Tx) and it is necessary to ensure that the receiving end and the transmitting end are in an interconnected state (so, whatever the tx side is txing, is rx'd on the rx side).<br>In common cabling systems, connectors such as LC and SC can easily be matched, so there is no polarity issue. However, for pre-terminated, high-density MTP®/MPO cabling systems, fiber polarity issues must be addressed.</p>

<h4 style="margin-bottom: 0.25px;">Polarity Types</h4>
<dl>
  <dt>Type A (Straight)</dt>
  <dd>Known as a straight cable, is a cable with a <b>key-up</b> MTP/MPO connector on one end and a <b>key-down</b> MPO/MTP connector on the other.<br>And so, the fiber located at position 1 (P1) of the connector on one side will arrive at P1 at the other connector. The fiber sequence of a 12 fiber Type A MTP® cable is shown below:<br><img src="./types-cables/mpo-mtp/assets/mpo-typeA.png"></dd>

  <dt>Type B (Reversed)</dt>
  <dd>Known as a reverse cable, is a cable with a <b>key-up</b> MTP/MPO connector on both the ends.<br>And so, the fiber located at position 1 (P1) of the connector on one side will arrive at P12 at the other connector. The fiber sequence of a 12 fiber Type B MTP® cable is shown below:<br><img src="./types-cables/mpo-mtp/assets/mpo-typeB.png"><br><strong>Also the most common one used in the connections.</strong></dd>

  <dt>Type C (Pairs Flipped)</dt>
  <dd>Known as a "pairs flipped" cable, which looks like a Type A, with a <b>key-up</b> MTP/MPO connector on one end and a <b>key-down</b> MPO/MTP connector on the other, however, in this type, each adjacent pairs of fiber at one end are flipped on the other.<br>For example, the fiber at position 1 at one end is shifted to position 2 at the other end of the cable. The fiber at position 2 at one end is shifted to position 1 at the opposite end and so on.<br>The fiber sequence of MTP®-12 Type C cable is demonstrated in the following picture:<br><img src="./types-cables/mpo-mtp/assets/mpo-typeC.png"></dd>
</dl>

<h3 style="margin-bottom: 0.25px;">Types of MPO cables</h3>
<h4 style="margin-bottom: 0.25px;">MPO Trunk</h4>
MPO Trunk cable is a very covenient way to consolidate and provide compact cross-connection across the infrastructure. They are widely used in campus, telecom, data center and corporate networks.

To ensure a good connection, it is required to match Trunk Cable fiber count to that of the Transceiver or other Equipment on both ends.
For example, 100G SR4 is a 100G transceiver utilizing 4 lanes each capable of 25G data rate for Tx. The same amount of lanes are required for Rx also. To ensure 100G SR4 to 100G SR4 connection there is a need for 4 Tx lanes and 4x Rx lanes which requires a total of 8 lanes. However, MPO-8 is not used. Transceivers that require MPO-8 use MPO-12 and are developed to be fitted with it.

<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 15%;">Fiber Type</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 8%;"># of lanes</th>
        <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 9%;"># of fibers</th>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3" style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;"><strong>MMF</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">S48</td>
            <td style="border: 1px solid #ddd; padding: 5px;">8</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">SR8</td>
            <td style="border: 1px solid #ddd; padding: 5px;">16</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">SR16</td>
            <td style="border: 1px solid #ddd; padding: 5px;">32</td>
        </tr>
        <tr>
            <td rowspan="2" style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;"><strong>SMF (PSM4)</strong></td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">LR4</td>
            <td style="border: 1px solid #ddd; padding: 5px;">8</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top;">LR8</td>
            <td style="border: 1px solid #ddd; padding: 5px;">16</td>
        </tr>
    </tbody>
</table>

<h4 style="margin-bottom: 0.25px;">Breakouts</h4>
As the name suggests, MPO Break-out cables are excellent for splitting and merging data flow. Most common conversion is the MPO to X-LC, where X is the # of LC connectors.
Example: MPO12-4LC, MPO16-8LC etc.
<br>
<br>

---
<h3 style="margin-bottom: 0.25px;">References</h3>
Content on this page is a combination of original write-up + inspiration from the below mentioned places:
<ol style="margin-top: 0.25px;">
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/blog/understanding-polarity-in-mtpmpo-system-948.html">Understanding MPO/MTP Polarities</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.fs.com/blog/mtpmpo-cables-what-are-they-and-how-to-use-them-953.html">What are MPO/MTP cables</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://edgeoptic.com/kb_article/mtp-mpo-cables-all-basics-you-need-to-know/">MTP MPO Cables All Basics You Need To Know</a></li>
</ol>