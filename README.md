# Unofficial Eos OSC Docs

- [Unofficial Eos OSC Docs](#unofficial-eos-osc-docs)
  - [About](#about)
  - [Eos Key List](#eos-key-list)
  - [Connecting to the console](#connecting-to-the-console)
    - [OSC UDP](#osc-udp)
    - [OSC TCP](#osc-tcp)
  - [Undocumented Eos OSC Features](#undocumented-eos-osc-features)
    - [Mobile Apps API](#mobile-apps-api)
    - [Console Discovery](#console-discovery)

> [!IMPORTANT]
> These docs are a work in progress and are not complete. If you have any information to add, please open a pull request or issue.

## About

ETC's Eos Family consoles support OSC for control and other integration with software tools.
However, there is no single source of truth or documentation for Eos OSC. This is a collection of information that I have gathered over the years, making it public for others to benefit from.

By publishing this unofficial documentation, I hope to make it easier for third-party developers to work with Eos OSC, and have more stability and flexibility in our own configurations.

## Eos Key List

A list of all the keys that Eos uses in its OSC messages.

A source of this file can be found here, <https://github.com/jmcker/OSC-Control---ETC-Eos/blob/master/reference/Eos%20OSC%20Keys.pdf>, and has been included in this repository for ease of use.

## Connecting to the console

There are three options to connect to the console.

- OSC UDP
- OSC TCP
- USB Serial

Two of these methods work over the network, while the third way transports OSC over a USB Serial connection. For now, we'll look into both OSC UDP and OSC TCP.

> [!NOTE]
> I personally prefer OSC TCP over UDP for all new and recent projects, as it is more reliable and has built in error checking. It is also doesn't tie up my UDP ports which are necessarily for supporting software that cannot be reconfigured.
> While UDP is still a valid option, it is personally discouraged.

### OSC UDP

By default, the console listens on port 3032 for OSC UDP messages, and will send replies on port 3031. These ports support broadcast requests, so sending to the broadcast address of the network will be received by all consoles on the network that are configured to the same port.
Replies can work the same way, if desired.

### OSC TCP

TCP connections are a bit more complicated from the developer point of view, but are more resilient.

The following is a list of port options to connect to.

- **3032**
  - Pros
    - official recommendation
    - lots of customization options
  - Cons
    - requires the user to set settings in their console
    - can be any port at all, so it might not exist
    - can be either OSC v1.0 or v1.1
    - requires OSC TCP to be enabled, the correct OSC version to be selected, and the correct port to be selected.
- **3037**
  - Pros
    - when enabled, always a v1.1 OSC TCP server
    - there is only one toggle for this server (Third Party OSC, in Network settings)
  - Cons
    - only supported since Eos 3.1+

For completions sake, the mobile apps port is also documented below.

> [!WARNING]
> The below port is not officially documented by ETC, but is used for the mobile apps. It is included here for completeness.

- **3036**
  - Pros
    - always a v1.0 OSC TCP server when enabled
    - there is only one toggle in the console for this connection
    - the same behaviour on version 2.9 and 3.x
  - Cons
    - undocumented server

## Undocumented Eos OSC Features

> [!CAUTION]
> These features are not officially documented by ETC. Use at your own risk.

These are documented for completeness, and to provide a better understanding of the Eos OSC ecosystem. Unless otherwise noted, these are not officially supported by ETC. Any suggestions to use these features are by the author of this document, and not ETC.

- mobile apps OSC server
- Eos OSC discovery server

### Mobile Apps API

### Console Discovery

ETC consoles run a listener for a discovery request, sent over an UDP OSC request, for the visible to remotes option. If it is enabled, the listener will also respond.

This seems to exists for use by the official mobile apps to automatically show existing consoles on the network, making configuration and usage easier.
However, this API can, in my opinion, be considered somewhat stable and public, as the Luminosus Eos Edition used the [same API](https://github.com/ETCLabs/LuminosusEosEdition/blob/fb9fe30d285812312e93cf2678c62155f50e2f07/src/eos_specific/OSCDiscovery.h#L12-L35) to detect Eos consoles on the network.

The discovery server listens for a broadcast UDP OSC packet on port 3034, and responds to the following OSC message:

```plaintext
/etc/discovery/request
```

It is important to include the RFR OSC Discovery text exactly as written.

Eg, to discover a console on a network with the [recommended ETC network settings](https://support.etcconnect.com/ETC/Networking/General/ETC_Network_IP_Addresses)—This is a 10.101/16 network—we would send a broadcast UDP OSC packet to 10.101.255.255 on port 3034.

The console, and other possible devices will respond with the following osc address on port 3035, by default:

```plaintext
/etc/discovery/reply
```

