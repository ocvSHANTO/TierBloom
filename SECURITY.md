# Security Policy

## Supported versions
Only the latest release on the `main` branch is supported.

## Reporting a vulnerability
Please do **not** open a public issue for security problems. Email **Junayed.I.Shanto@gmail.com** with:
- A description of the issue and its impact
- Steps to reproduce
- Browser and device details

You can expect an acknowledgement within a few days and a fix or mitigation plan as soon as practical.

## Design notes
- No network requests, third-party scripts or analytics
- Images are processed locally and never leave the device
- All user text is escaped before being inserted into the page
