# Mipa

Machine IP Address. Gather metadata about a machine's public IP address using ifconfig.io.


## Installation

```sh
npm i mipa
```


## Usage

```js
import mipa from 'mipa'

await mipa()
```

An object containing the following fields will be returned:

```js
{
  ip: ..., // The machine's public IP address.
  port: ..., // The ephemeral port which was used to connect to ifconfig.io.
  country_code: ..., // Course location of the IP address.
}
```
