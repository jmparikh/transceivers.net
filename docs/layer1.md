The way the bits are joined together into a frame to be able to facilitate functions like clock recovery and error checking and correction:

64B/66B: Two control bits with a 1/0 transition are added to the front of a 64 bit frame to ensure that the clock can sync every 66 bits.
RS-FEC encoding (528,514) or (544,514): Uses 14 or 30 bits to enable correction of bit errors on the receive side (see the FEC section below).
BaseR FEC encoding: Steals a bit in the 64B/66B control word to re-encode and add a smaller level of error correction than RS-FEC.


SRC: https://docs.nvidia.com/networking-ethernet-software/cumulus-linux-43/Monitoring-and-Troubleshooting/Troubleshooting-Network-Interfaces/Troubleshoot-Layer-1/