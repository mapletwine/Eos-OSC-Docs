# Connecting to the console

There are three options to connect to the console.

- OSC UDP
- OSC TCP
- USB Serial

Two of these methods work over the network, while the third way transports OSC over a USB Serial connection. For now, we'll look into both OSC UDP and OSC TCP.

> [!NOTE]
> I personally prefer OSC TCP over UDP for all new and recent projects, as it is more reliable and has built in error checking. It is also doesn't tie up my UDP ports which are necessarily for supporting software that cannot be reconfigured.
> While UDP is still a valid option, it is personally discouraged.

## UDP

By default, the console listens on port 3032 for OSC UDP messages, and will send replies on port 3031. These ports support broadcast requests, so sending to the broadcast address of the network will be received by all consoles on the network that are configured to the same port.
Replies can work the same way, if desired.

### TCP

TCP connections are a bit more complicated from the developer point of view, but can be more resilient.

The following is a list of port options to connect to.

- **3032**
  - official recommendation
  - lots of customization options
  - requires the user to set settings in their console
  - can be any port at all, so it might not exist
  - can be either OSC v1.0 or v1.1
  - requires OSC TCP to be enabled, the correct OSC version to be selected, and the correct port to be selected.
- **3037**
  - when enabled, always a v1.1 OSC TCP server
  - there is only one toggle for this server (Third Party OSC, in Network settings)
  - only supported since Eos 3.1+

For completions sake, the mobile apps port is also documented below.

> [!WARNING]
> The below port is not officially documented by ETC, but is used for the mobile apps. It is included here for completeness.

- **3036**
  - always a v1.0 OSC TCP server when enabled
  - there is only one toggle in the console for this connection
  - the same behaviour on version 2.9 and 3.x
  - undocumented server
