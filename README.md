CloudFoundry buildpack that installs sshd, tmux and WeeChat.

It deploys a WebSockets proxy in front of sshd that can be used to ssh into
the container. This requires a TCP to WebSockets proxy on the client side.
