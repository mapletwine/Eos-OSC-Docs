# Advanced

Some features of Eos OSC are implemented for first party use, however, this does not stop us from integrating with them. That said, they are not subject to the same backwards compatibility policy, and care must be taken when using them.

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
