#!/bin/bash

npm ci && npm run build && npx prisma deploy

npm run start