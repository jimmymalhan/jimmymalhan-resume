#!/bin/bash

# Kill processes on ports 3000 to 3008
for port in {3000..3008}; do
  lsof -ti :$port | xargs kill
done