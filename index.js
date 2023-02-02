import fetch from 'node-fetch'


let response = null;


export default async function() {

        if (! response) {
                response = await fetch('https://ifconfig.io/all.json').then(_ => _.json())
        }

        return response
}
