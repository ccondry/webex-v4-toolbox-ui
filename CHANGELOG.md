# webex-v4-toolbox-ui Change Log

Version numbers are semver-compatible dates in YYYY.MM.DD-X format,
where X is the revision number


# 2021.5.21

### Features
* **Agents:** Add extra usernames for Management Portal.

### Fixes
* **Agents:** Hide the end of the long the Management Portal URL with ellipsis.


# 2021.5.18

### Fixes
* **Welcome:** Show feedback on the Join Support Space button when the request
is in progress.


# 2021.5.17

### Fixes
* **Agents:** Update the management portal URL.


# 2021.5.13

### Fixes
* **Layout:** Add panel to set the app title.


# 2021.5.12-2

### Fixes
* **Layout:** Fix filenames of desktop layout downloaded files, and update the
format to have 2 space indentation and newlines.


# 2021.5.12-1

### Fixes
* **Layout:** Fix references to desktop layout JSON, causing the buttons to not
finish loading.


# 2021.5.12

### Fixes
* **Layout:** Update desktop layout format from server to fix logo upload.


# 2021.5.6

### Features
* **VPN:** Add note about installing only the Core & VPN part of VPN client
on Windows.


# 2021.5.3

### Features
* **VPN:** Add download links for the AnyConnect installer.


# 2021.4.27

### Features
* **Mobile App:** Remove Mobile App panel, leaving just the Mobile Web App
information. Update the QR code to use permanent v4 datacenter and session ID
strings instead of dCloud session info.


# 2021.4.22

### Features
* **Desktop Layout:** Add an upload button to replace the current desktop layout
logo image.
* **Agent Connection:** Combine VPN and Workstation panels into horizontal
tiles in one panel.
* **Mobile App:** Combine Mobile App and Mobile Web App panels into horizontal
tiles in one panel.


# 2021.4.19

### Features
* **Support:** Update terminology for Webex Teams Support Room -> Webex Support
Space.


# 2021.4.8-2

### Bug Fixes
* **Notifications:** Hide error notifications that were not intended to be
displayed to users.


# 2021.4.8-1

### Bug Fixes
* **Agents:** Add domain part of the RDP username.


# 2021.4.8

### Features
* **Agent Desktop:** Add Agent Desktop panel to download global default agent
desktop layout, download current user desktop layout, and upload new desktop
layout to replace the user's current one.


# 2021.4.7

### Features
* **Agents:** Move control hub link above management portal.


# 2021.4.6-1

### Features
* **Agents:** Revert administrator login username.


# 2021.4.6

### Features
* **Agents:** Update administrator login username.


# 2021.3.30-1

### Bug Fixes
* **Mobile App:** Add note about the mobile app not supporting SMS feature yet.


# 2021.3.30

### Bug Fixes
* **Whatsapp:** Remove Whatsapp demo information.


# 2021.3.17

### Features
* **Provision:** Show provision error messages to user.

### Bug Fixes
* **dCloud Session:** Fix session ID and datacenter information sometimes not
displaying in datacenters other than RTP.


# 2021.3.10-3

### Bug Fixes
* **VPN:** Fix VPN address display for datacenters other than RTP.


# 2021.3.10-2

### Features
* **Logout:** Show loading/working status and disable the logout button while
logging out.


# 2021.3.10-1

### Features
* **Agents:** Remove management portal from administrator, add control hub
to supervisor.


# 2021.3.10

### Features
* **Workstation:** Add dCloud CA Certificate link and installation instructions
for Windows and Mac, to remove the certificate warning when connecting to the
workstation.


# 2021.3.4

### Features
* **Mobile App:** Update pod ID info text.


# 2021.3.3-4

### Features
* **Mobile Web App:** Add new mobile web app demo information.


# 2021.3.3-3

### Bug Fixes
* **WhatsApp:** Horizontally center the WhatsApp QR code image.


# 2021.3.3-2

### Bug Fixes
* **Navbar:** Enable clicking through the empty navbar area between home and
logout buttons.


# 2021.3.3-1

### Bug Fixes
* **WhatsApp:** Add line breaks to WhatsApp demo information.


# 2021.3.3

### Features
* **WhatsApp:** Add WhatsApp demo information.


# 2021.3.2

### Features
* **VPN:** Add a VPN address for each datacenter.


# 2021.2.25-5

### Bug Fixes
* **Demo Website:** Show notification toast when saving the vertical is
successful.


# 2021.2.25-4

### Features
* **Mobile App:** Added mobile app connection info.

### Bug Fixes
* **Demo Website:** Don't block the Go to Demo Website button when loading
verticals or setting the vertical.
* **Session Info:** Fix session info to get the right global session details 
regardless of which toolbox datacenter they are using.


# 2021.2.25-3

### Features
* **Demo Website:** Remove unused features for finding and selecting other
verticals. Make the Go to Demo Website button a link that can be copied.
* **Agents:** Update login info and links.
* **Laptop Demo:** Update phones title to Laptop Demo, and update the content
wording.
* **Reprovision:** Update the content wording.


# 2021.2.25-2

### Features
* **Agents:** Add administrator agent for Control Hub / Management Portal.


# 2021.2.25-1

### Features
* **Reprovision:** Prompt for VPN password on reprovision.

### Bug Fixes
* **VPN:** Fix the Reset VPN Password button - it now reprovisions user.


# 2021.2.25

### Features
* **VPN:** Add VPN connection info.
* **RDP Workstation:** Add RDP workstation connection info.
* **Provision:** Ask for new VPN password when starting provision.


# 2021.2.24

### Features
* **Provision:** Update links on agent info, add copy button to them. Update
agent extensions. Add Portal admin link for Rick Barrows. Add links to download
agent phone software.


# 2021.2.18

### Features
* **Provision:** Update REST path for provisioning API. Improve display and response.
* **Agents:** Make the buttons standard copyable links.


# 2021.2.10-1

### Features
* **Admin:** Remove voice queue ID setting and add provision status setting.


# 2021.2.10

### Features
* **Provision:** Update provision status checking to match API side.


# 2020.11.24

### Features
* **Demo Website:** fix demo website link to use session ID and datacenter


# 2020.11.20

### Features
* **Created:** created working provision toolbox
