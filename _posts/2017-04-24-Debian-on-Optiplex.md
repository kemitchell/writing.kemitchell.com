---
title: Debian 8.7 on Dell Optiplex 7010
layout: post
---

A few pointers on installing Debian 8.7 on a Dell Optiplex 7010 in mid-April, 2017:

<!--jump-->

1.  Your BIOS probably isn't set up to boot from USB.  You'll need to press F2 during boot to access the BIOS configuration menu to add it to the boot order.  F12 shows the boot menu, for UEFI as well as legacy boot.  The Debian installer will ask about setting BIOS back to legacy boot.

2.  The BIOS wouldn't register keystrokes from my Kinesis Advantage keyboard during boot.  Perhaps because the USB cable from the board actually leads to a USB hub.  I ended up having to dig up and use an old, no-frills USB keyboard to get the boot menu.

3.  BIOS will boot from USB devices inserted in the ports at the front of the case.  No need to plug in at the back.

4.  If the Debian installer asks, the Ethernet NIC driver is "e1000e".

5.  Display worked fine with `xserver-xorg-video-intel`.

6.  I had trouble with GRUB when installed in encrypted LVM volumes.  The computer would wait for input at the usual decryption key prompt, but the prompt wouldn't appear on-screen.

```
$ sudo lshw
optiplex
    description: Computer
    width: 64 bits
    capabilities: smbios-2.7 vsyscall32
  *-core
       description: Motherboard
       physical id: 0
     *-memory
          description: System memory
          physical id: 0
          size: 15GiB
     *-cpu
          product: Intel(R) Core(TM) i7-3770S CPU @ 3.10GHz
          vendor: Intel Corp.
          physical id: 1
          bus info: cpu@0
          size: 3245MHz
          capacity: 3900MHz
          width: 64 bits
          capabilities: fpu fpu_exception wp vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx rdtscp x86-64 constant_tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc aperfmperf eagerfpu pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm ida arat epb xsaveopt pln pts dtherm tpr_shadow vnmi flexpriority ept vpid fsgsbase smep erms cpufreq
     *-pci
          description: Host bridge
          product: Xeon E3-1200 v2/3rd Gen Core processor DRAM Controller
          vendor: Intel Corporation
          physical id: 100
          bus info: pci@0000:00:00.0
          version: 09
          width: 32 bits
          clock: 33MHz
        *-display
             description: VGA compatible controller
             product: Xeon E3-1200 v2/3rd Gen Core processor Graphics Controller
             vendor: Intel Corporation
             physical id: 2
             bus info: pci@0000:00:02.0
             version: 09
             width: 64 bits
             clock: 33MHz
             capabilities: msi pm vga_controller bus_master cap_list rom
             configuration: driver=i915 latency=0
             resources: irq:47 memory:f7800000-f7bfffff memory:e0000000-efffffff ioport:f000(size=64)
        *-usb:0
             description: USB controller
             product: 7 Series/C210 Series Chipset Family USB xHCI Host Controller
             vendor: Intel Corporation
             physical id: 14
             bus info: pci@0000:00:14.0
             version: 04
             width: 64 bits
             clock: 33MHz
             capabilities: pm msi xhci bus_master cap_list
             configuration: driver=xhci_hcd latency=0
             resources: irq:43 memory:f7c20000-f7c2ffff
           *-usbhost:0
                product: xHCI Host Controller
                vendor: Linux 3.16.0-4-amd64 xhci_hcd
                physical id: 0
                bus info: usb@2
                logical name: usb2
                version: 3.16
                capabilities: usb-3.00
                configuration: driver=hub slots=4 speed=5000Mbit/s
           *-usbhost:1
                product: xHCI Host Controller
                vendor: Linux 3.16.0-4-amd64 xhci_hcd
                physical id: 1
                bus info: usb@1
                logical name: usb1
                version: 3.16
                capabilities: usb-2.00
                configuration: driver=hub slots=4 speed=480Mbit/s

             [Omitted: USB Peripherals]

        *-communication:0
             description: Communication controller
             product: 7 Series/C210 Series Chipset Family MEI Controller #1
             vendor: Intel Corporation
             physical id: 16
             bus info: pci@0000:00:16.0
             version: 04
             width: 64 bits
             clock: 33MHz
             capabilities: pm msi bus_master cap_list
             configuration: driver=mei_me latency=0
             resources: irq:45 memory:f7c3c000-f7c3c00f
        *-communication:1
             description: Serial controller
             product: 7 Series/C210 Series Chipset Family KT Controller
             vendor: Intel Corporation
             physical id: 16.3
             bus info: pci@0000:00:16.3
             version: 04
             width: 32 bits
             clock: 66MHz
             capabilities: pm msi 16550 bus_master cap_list
             configuration: driver=serial latency=0
             resources: irq:19 ioport:f0e0(size=8) memory:f7c3a000-f7c3afff
        *-network
             description: Ethernet interface
             product: 82579LM Gigabit Network Connection
             vendor: Intel Corporation
             physical id: 19
             bus info: pci@0000:00:19.0
             logical name: eth0
             version: 04
             serial: b8:ca:3a:9a:4b:51
             size: 1Gbit/s
             capacity: 1Gbit/s
             width: 32 bits
             clock: 33MHz
             capabilities: pm msi bus_master cap_list ethernet physical tp 10bt 10bt-fd 100bt 100bt-fd 1000bt-fd autonegotiation
             configuration: autonegotiation=on broadcast=yes driver=e1000e driverversion=2.3.2-k duplex=full firmware=0.13-4 ip=192.168.1.68 latency=0 link=yes multicast=yes port=twisted pair speed=1Gbit/s
             resources: irq:42 memory:f7c00000-f7c1ffff memory:f7c39000-f7c39fff ioport:f080(size=32)
        *-usb:1
             description: USB controller
             product: 7 Series/C210 Series Chipset Family USB Enhanced Host Controller #2
             vendor: Intel Corporation
             physical id: 1a
             bus info: pci@0000:00:1a.0
             version: 04
             width: 32 bits
             clock: 33MHz
             capabilities: pm debug ehci bus_master cap_list
             configuration: driver=ehci-pci latency=0
             resources: irq:16 memory:f7c38000-f7c383ff
           *-usbhost
                product: EHCI Host Controller
                vendor: Linux 3.16.0-4-amd64 ehci_hcd
                physical id: 1
                bus info: usb@3
                logical name: usb3
                version: 3.16
                capabilities: usb-2.00
                configuration: driver=hub slots=3 speed=480Mbit/s
              *-usb
                   description: USB hub
                   product: Integrated Rate Matching Hub
                   vendor: Intel Corp.
                   physical id: 1
                   bus info: usb@3:1
                   version: 0.00
                   capabilities: usb-2.00
                   configuration: driver=hub slots=6 speed=480Mbit/s

                 [Omitted: USB Peripherals]

        *-multimedia
             description: Audio device
             product: 7 Series/C210 Series Chipset Family High Definition Audio Controller
             vendor: Intel Corporation
             physical id: 1b
             bus info: pci@0000:00:1b.0
             version: 04
             width: 64 bits
             clock: 33MHz
             capabilities: pm msi pciexpress bus_master cap_list
             configuration: driver=snd_hda_intel latency=0
             resources: irq:46 memory:f7c30000-f7c33fff
        *-usb:2
             description: USB controller
             product: 7 Series/C210 Series Chipset Family USB Enhanced Host Controller #1
             vendor: Intel Corporation
             physical id: 1d
             bus info: pci@0000:00:1d.0
             version: 04
             width: 32 bits
             clock: 33MHz
             capabilities: pm debug ehci bus_master cap_list
             configuration: driver=ehci-pci latency=0
             resources: irq:23 memory:f7c37000-f7c373ff
           *-usbhost
                product: EHCI Host Controller
                vendor: Linux 3.16.0-4-amd64 ehci_hcd
                physical id: 1
                bus info: usb@4
                logical name: usb4
                version: 3.16
                capabilities: usb-2.00
                configuration: driver=hub slots=3 speed=480Mbit/s
              *-usb
                   description: USB hub
                   product: Integrated Rate Matching Hub
                   vendor: Intel Corp.
                   physical id: 1
                   bus info: usb@4:1
                   version: 0.00
                   capabilities: usb-2.00
                   configuration: driver=hub slots=8 speed=480Mbit/s
        *-isa
             description: ISA bridge
             product: Q77 Express Chipset LPC Controller
             vendor: Intel Corporation
             physical id: 1f
             bus info: pci@0000:00:1f.0
             version: 04
             width: 32 bits
             clock: 33MHz
             capabilities: isa bus_master cap_list
             configuration: driver=lpc_ich latency=0
             resources: irq:0
        *-storage
             description: SATA controller
             product: 7 Series/C210 Series Chipset Family 6-port SATA Controller [AHCI mode]
             vendor: Intel Corporation
             physical id: 1f.2
             bus info: pci@0000:00:1f.2
             version: 04
             width: 32 bits
             clock: 66MHz
             capabilities: storage msi pm ahci_1.0 bus_master cap_list
             configuration: driver=ahci latency=0
             resources: irq:44 ioport:f0d0(size=8) ioport:f0c0(size=4) ioport:f0b0(size=8) ioport:f0a0(size=4) ioport:f060(size=32) memory:f7c36000-f7c367ff
        *-serial UNCLAIMED
             description: SMBus
             product: 7 Series/C210 Series Chipset Family SMBus Controller
             vendor: Intel Corporation
             physical id: 1f.3
             bus info: pci@0000:00:1f.3
             version: 04
             width: 64 bits
             clock: 33MHz
             configuration: latency=0
             resources: memory:f7c35000-f7c350ff ioport:f040(size=32)

     [Omitted: SATA HDD]

     *-scsi:1
          physical id: 3
          logical name: scsi1
          capabilities: emulated
        *-cdrom
             description: DVD-RAM writer
             product: DVD+-RW SN-208DN
             vendor: TSSTcorp
             physical id: 0.0.0
             bus info: scsi@1:0.0.0
             logical name: /dev/cdrom
             logical name: /dev/cdrw
             logical name: /dev/dvd
             logical name: /dev/dvdrw
             logical name: /dev/sr0
             version: D100
             capabilities: removable audio cd-r cd-rw dvd dvd-r dvd-ram
             configuration: ansiversion=5 status=nodisc
```
