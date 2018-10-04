# multiplexer
Multiplexer aims to replace an executable and reroute all execution commands to any attached node.

## Prerequisites

The master machine must be able to connect to the nodes via ssh.


## Master

Configure the master to replace an executable and relay all commands to any nodes.

`multiplexer cmd --config -d <directory> -n 'Some Executable' -h <ip>`

## Adding slaves

`multiplexer cmd --config -a <nameOfNode> -h <ip>`
