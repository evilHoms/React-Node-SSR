# Requeriments:
* echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p on Linux or Mac if ENOSPC error happens.