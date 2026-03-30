A "prom" is a formal dance party for graduating high school students at the end of the school year. Fun, right? But we will be talking about a boring kind of PROM: Programmable Read-Only Memory (PROM)
<dl>
    <dt>Programmable Read-Only Memory</dt>
    <dd>A programmable read-only memory (PROM) is a form of digital memory where the contents are set after the device is manufactured. Once set, the contents are then permanent. A PROM is one type of read-only memory (ROM). PROMs are usually used in digital electronic devices to store low level programs such as firmware or microcode. PROMs may be used during development of a system that will ultimately be converted to ROMs in a mass produced version. These types of memories are used in microcontrollers, video game consoles, mobile phones, radio-frequency identification (RFID) tags, implantable medical devices, high-definition multimedia interfaces (HDMI), and in many other consumer and automotive products.</dd>
</dl>
EEPROM does not require continuous power to retain its contents. These characteristics make it well-suited for a lot of use cases, and one of the relevant case in this discussion is hot-pluggable network components such as optical modules, which need to be identified by host devices in real time. In optical communication systems, EEPROM has become the mainstream carrier for core module information.

There are multiple types of PROMs, like: PROM, EPROM, EEPROM (and IDPROM). We will be talking about EEPROM and IDPROM here, from the perspective of netwroks. (since others might be out of the scope of this dicussion)

<h3 style="margin-bottom: 0.25px;">EEPROM</h3>
EEPROM or E<sup>2</sup>PROM (electrically erasable programmable read-only memory) is a type of non-volatile memory. It is used in computers, usually integrated in microcontrollers such as smart cards and remote keyless systems, or as a separate chip device, to store relatively small amounts of data by allowing individual bytes to be erased and reprogrammed.

<h4 style="margin-bottom: 0.25px;">How is it relevant w.r.t. L1 in the networks?</h4>
One of the places where EEPROMs are used are transceivers. Transceivers are critical components in modern data centers and telecom networks. Inside each transceiver lies an EEPROM. While tiny in size, EEPROM plays a central role in ensuring compatibility, plug-and-play functionality, and real-time monitoring.<br>Within transicevers, this EEPROM is connected to the host device (switch, router, or server) through a standard I<sup>2</sup>C interface. So, when the host queries the transceiver, the EEPROM can provide the information.
<ul>
    <li>EEPROM allows fast information access. During hot insertion of an optical module, it can immediately provide identification information for the switch to read, enabling rapid verification of module speed, type, and capabilities, and allowing rapid port initialization and deployment.</li>
    <li>The A2h area of EEPROM (discussed below) stores real-time operating data of the optical module. This allows the host device to read them periodically (or in reali time), ensuring effective real-time monitoring and alarming of ports and modules, which is highly valuable for long-term operation and maintenance.</li>
    <li>Additionally, EEPROM offers a unified communication interface for optical modules of various types and speeds when paired with the DDM/DOM protocol. This makes it possible for switches to identify and control Gigabit, 10G, 25G, 100G, and 400G high-speed modules in a uniform way, facilitating interoperability between switches and modules.</li>
</ul>

Typical EEPROM Data Fields (Defined by Standards like SFF-8024 and SFF-8472)
<ul style="margin-top: 0;">
    <li>Vendor Information: Manufacturer name, part number, serial number.</li>
    <li>Module Capabilities: Supported speeds (1G, 10G, 25G, etc.), wavelength, fiber type.</li>
    <li>Compliance Codes: Compatibility with standards such as IEEE 802.3 and ITU-T.</li>
    <li>Diagnostics (DOM/DDM): Real-time monitoring of optical power, temperature, and voltage.</li>
</ul>
This data allows networking equipment to validate compatibility and enable advanced features like Digital Diagnostics/Optical Monitoring (DDM/DOM).

<h4 style="margin-bottom: 0.25px;">Why Is it Important?</h4>
<ul>
    <li>Plug-and-Play Identification – Ensures that when a transceiver is inserted, the host recognizes it instantly.</li>
    <li>Interoperability – EEPROM ensures compliance with multi-vendor environments by following SFF-standards.</li>
    <li>Diagnostics – With DDM, EEPROM enables operators to monitor link health in real time.</li>
    <li>Network Reliability – Accurate EEPROM data helps avoid configuration errors and downtime.</li>
</ul>

<h4 style="margin-bottom: 0.25px;">EEPROM Data Structure</h4>
Within the EEPROM, memory is divided into standard address pages, each storing different types of information.
<dl>
    <dt>A0h Page</dt>
    <dd>This page stores fixed, static information. In optical modules, this includes basic parameters such as module type, vendor, data rate, and wavelength.<br>It is commonly used by switches to identify modules, which is the basis of typical compatibility verifications.</dd>
    <dt>A2h Page</dt>
    <dd>This page stores dynamic information. In optical modules, it includes temperature, voltage, transmit optical power, receive optical power, and alarm or status indicators.<br>Switches mainly use it for real-time monitoring and diagnostics, such as reading DDM or DOM data.</dd>
</dl>

<h4 style="margin-bottom: 0.25px;">EEPROM Read Logic</h4>
After power-up, the switch accesses the EEPROM via a serial communication protocol, such as I²C, to exchange information with the optical module and monitor its status. The process usually follows these steps.
<ol style="margin-top: 0.25px;">
    <li>When a module is inserted into a switch port, the switch, acting as the controller device, initiates read commands to the EEPROM.</li>
    <li>The EEPROM returns data from the specified addresses, and the switch parses the returned information.</li>
    <li>The switch first reads the A0h page to confirm basic parameters such as module type and data rate, and determines whether the port is allowed to establish a link.</li>
    <li>After link establishment, the switch periodically reads the A2h page to obtain runtime data, such as temperature, voltage, and transmit and receive optical power, and updates the link status.</li>
</ol>

<br>
<br>

---
<h3 style="margin-bottom: 0.25px;">References</h3>
Content on this page is a combination of original write-up + inspiration from the below mentioned places:
<ol style="margin-top: 0.25px;">
    <li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Prom">Prom (Dance)</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="http://en.wikipedia.org/wiki/Programmable_ROM">PROM</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/EEPROM">EEPROM</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://resources.l-p.com/knowledge-center/how-eeprom-powers-sfp-and-qsfp-optical-modules">How EEPROM Powers SFP and QSFP Optical Modules</a></li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.optcore.net/what-is-eeprom-in-optical-transceiver">What is EEPROM in Optical Transceivers</a></li>
</ol>