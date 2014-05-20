CloudFoundry buildpack that installs sshd, tmux and WeeChat.

It deploys a WebSockets proxy in front of sshd that can be used to ssh into
the container. This requires a TCP to WebSockets proxy on the client side.

A CloudFoundry app that uses this buildpack should have only two files:

* an ssh authorized_keys file named authorized_keys
* a script called start that looks like this:

```sh
#!/bin/sh

$HOME/sbin/sshd \
  -e \
  -f $HOME/etc/sshd_config

$HOME/websockify-0.6.0/run \
  --verbose \
  --wrap-mode=ignore \
  $PORT \
  localhost:2222
```
