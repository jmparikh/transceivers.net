<h3 style="margin-bottom: 0.25px;">What is FEC and why am I asking you to thank me?</h3>
Forward Error Correction (FEC) is an algorithm used to correct bit errors along a medium.<br>It is a technique used in data communications where data is portioned into blocks so that parity bits can be added to the blocks. FEC encodes the data stream so that the remote device can correct a certain number of bit errors by decoding the stream, so, when the errors are sufficiently randomly distributed, these parity bits can be the saviors and can be used by the receiver to identify bits which are in error and allow correction. <b>The target IEEE bit error rate (BER) in high-speed Ethernet is 10-12. At 25G lane speeds and above, this may not be achievable without error correction, depending on the media type and length.</b>
<br>
Some characteristcs to look out for in FEC:
<ul>
    <li>Strength: Typically characterized by the worst case BER that it can correct. The ability to correct is based on the number of symbols containing bit errors in a given codeword</li>
    <li>Ability to handle bursts of errors: Errors, when averaged, if does not exceed the worst case BER the FEC is rated for, can still cause uncorrectable errors.</li>
</ul>
There are two main types of FECs, in links using copper twinax cables or direct detect optics:
<ol style="margin-top: 0.25px;">
    <li>Reed-Solomon</li>
    <li>Firecode</li>
</ol>

FECs are also a part of the information which is exchanged while in the auto-negotaition phase.

<h3 style="margin-bottom: 0.25px;">Types of FEC</h3>
Let's talk FEC!
<h4 style="margin-bottom: 0.25px;">Reed-Solomon</h4>
Reed-Solomon (RS) is a ‘stronger’ FEC and is most prevalent. When transmitting, these symbols are distributed round robin to FEC lanes which are then mapped to PMD lanes. When receiving, the incoming symbols are used to assemble the codeword, and this is where the parity bits are used to perform error correction. Once done, the data is sent on for next processing.<br>RS-FEC can make corrections only when the number of bits in error does not exceed limits. <b>If the number of parity symbols is 2t, then RS-FEC can correct up to t symbols</b><br>
Has two kinds based on the link modulation:
<dl>
  <dt>RS(528,514) [NRZ]</dt>
  <dd>
    <b>528 total symbols | 514 data symbols (1 symbol == 10 bits)</b><br>
    This algorithm adds 140 bits of encoding information to a 5140 bit stream. This creates a block, codeword, that is 5280 bits in size, and is arranged as 10 bit ‘symbols’. It replaces and uses the same amount of overhead in the 64B/66B encoding, so that the bit rate is not affected. It can correct 70 bit errors in a 5140 bit stream. RS(528,514) is used on 25G (NRZ) lanes.
    <ul>
        <li>For RS-528, 2t=14 and so t=7.<br>This means that as many as 7 symbols or 70 bits (7x10 bits) may be errored and the codeword can still be corrected.</li>
        <li>If the bit errors are distributed 1 per 10-bits (1 symbol), as few as 8 bit errors, across the codeword, can result in an uncorrected codeword. Since 8 > 7, the maximum number of symbols correctable in a codeword.</li>
    </ul>
  </dd>

  <dt>RS(544,514) [PAM-4]</dt>
  <dd>
    <b>544 total symbols | 514 data symbols (1 symbol == 10 bits)</b><br>
    This algorithm adds 300 bits of encoding information to a 5140 bit stream. This creates a block, codeword, that is 5440 bits in size, and is arranged as 10 bit ‘symbols’. It can correct 150 bit errors per 5140 bit stream. FEC RS is required on 50G (PAM4) lanes.
    <ul>
        <li>For RS-544, 2t=30 and so up to t=15.<br>This means that as many as 15 symbols or 150 bits (15x10 bits) may be errored and the codeword can still be corrected.</li>
        <li>If the bit errors are distributed 1 per 10-bits (1 symbol), as few as 16 bit errors, across the codeword, can result in an uncorrected codeword. Since 16 > 15, the maximum number of symbols correctable in a codeword.</li>
    </ul>
  </dd>
</dl>


<h4 style="margin-bottom: 0.25px;">Firecode</h4>
Firecode (FC), also known as BASE-R or Clause 74 FEC, is used in 25G interfaces only and is less widely used than RS-FEC. The primary use case for FC-FEC is over short twinax cables where the propagation latency is less significant.<br>It can also be used at 25G and 50G with fiber optic connections when the preferred RS-FEC is not available. For 25G and 50G-2 links, if latency is an important factor to optimize, it is recommended to engineer the links to allow running with FEC disabled (Use twinax cables designated as CA-N).<br>
When transmitting with FC-FEC enabled, the PHY will again encode the data into blocks, adding parity bits.

FireCode/FC FEC, also known as Base-R, adds 32 bits per 32 blocks of 64B/66B to correct 11 bits per 2048 bits. It replaces one bit per block, so it uses the same amount of overhead as 64B/66B encoding. The algorithm executes faster than the RS-FEC algorithm, so latency is reduced.

<br>

<h3 style="margin-bottom: 0.25px;">Differences/Similarities</h3>
<table style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 20%;"></th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 40%;">Reed-Solomon</th>
            <th style="border: 1px solid #ddd; padding: 5px; text-align: left; width: 40%;">Firecode</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">Bursts of Errors</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">Better than FC</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">RS is better</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">Latency</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">High</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">Low</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">Implementation</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">In H/W</td>
            <td style="border: 1px solid #ddd; padding: 5px; vertical-align: top; text-align: left;">In H/W</td>
        </tr>
    </tbody>
</table>

<br>
<br>

---
<h3 style="margin-bottom: 0.25px;">References</h3>
Content on this page is a combination of original write-up + inspiration from the below mentioned places:
<ol style="margin-top: 0.25px;">
    <li><a target="_blank" rel="noopener noreferrer" href="https://arista.my.site.com/AristaCommunity/s/article/monitoring-link-quality-using-forward-error-correction-fec-data-on-arista-switches">Monitoring Link Quality Using Forward Error Correction (FEC) Data on Arista Switches</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://docs.nvidia.com/networking-ethernet-software/cumulus-linux-43/Monitoring-and-Troubleshooting/Troubleshooting-Network-Interfaces/Troubleshoot-Layer-1/">Troubleshoot Layer-1</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.arista.com/assets/data/pdf/Arista25G_TC_QA.pdf">Arista 25G Transceivers and Cables QA</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.naddod.com/blog/what-is-forward-error-correction-fec">What is FEC?</a></li>>
</ol>