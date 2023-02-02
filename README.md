# host-ip

Gather metadata about a machine's public IP address using ifconfig.io.


## Installation

```sh
npm i host-ip
```


## Usage

```js
import hostIP from 'host-ip'

await hostIP()
```

An object containing the following fields will be returned:

```js
{
  ip: ..., // The machine's public IP address.
  port: ..., // The ephemeral port which was used to connect to ifconfig.io.
  country_code: ..., // Course location of the IP address.
}
```
