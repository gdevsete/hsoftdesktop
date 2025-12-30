#!/bin/bash
# Script para executar comandos npm no host a partir do Flatpak

cd /home/gdev/Documentos/soft
flatpak-spawn --host npm "$@"
