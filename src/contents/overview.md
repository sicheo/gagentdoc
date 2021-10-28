## Overview 

**Gagent** is an application gateway designed to gather data from production equipments and IoT devices and to transfer these data to an upper level factory system, such as SCADA systems , MES systems or cloud platforms.

**Gagent** can be installed on devices that support Node and/or Docker platform (see [Installation on Node](markdown/Node) and [Installation on Docker](markdown/Docker) sections) , can be connected to ***equipment data source*** like PLC, machine monitors, industrial PCs, machine control systems, IoT sensors, etc. (see [Configure agent source](markdown/source) section) and can transfer data to ***data destination*** (see [Configure agent destination](markdown/confdest) section).

**Gagent**  extracts data from the field using a ***local database*** for each individual equipment (see [Configure agent database](markdown/confdb) section)

**Gagent** integrates into the ***factory operating system*** through standard protocols (see [Connect with OPCUA](markdown/connopcua), [Connect with MQTT](markdown/connmqtt), [Connect with Active Directory](markdown/connad))

### Main Features

* Based on [Node.js](https://nodejs.org/en/) platform
* Deployable on Node or [Docker](https://www.docker.com/)
* Configuration and management via REST API
* Extensibility with pluggable driver for data source and data destination
* Fully tested on [Brainboxes bb-400](https://www.brainboxes.com/news/introducing-the-bb-400-neuron-edge-controller)  and [Cisco IC3000](https://www.cisco.com/c/en/us/products/collateral/routers/3000-series-industrial-compute-gateways/datasheet-c78-741204.html) 
* Factory integration with [OPC-UA](https://opcfoundation.org/about/opc-technologies/opc-ua/) , [MQTT](https://mqtt.org/) and [Active Directory LDAP](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/ad-ds-getting-started) 
* [CFR Title 21 Part 11](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11) and [EU Annex 11](https://ec.europa.eu/health/sites/default/files/files/eudralex/vol-4/annex11_01-2011_en.pdf) compliant

### Typical project deployment Scenario

The figure shows the typical **Gagent** project deployment scenario:

![Project Deployment](projectdeployment.png 'ProjectDeployment')

1. Select the equipments to be integrated into the system
2. Collect the data necessary for the integration (type of equipment controller, type of data link, IP addresses, list of points to integrate)
3. Install and configure **Gagent HW** (see for example [BB-400 Installation](markdown/bb-400) and [Cisco IC3000 Installation](markdown/ic3000))
4. Install **Gagent** software (see [Installation on Node](markdown/Node) and [Installation on Docker](markdown/Docker) sections)
5. Configure **Gagent** software  (see [Configure agent source](markdown/source) and [Configure agent destination](markdown/confdest) section).
6. Configure agent db (see [Configure agent database](markdown/confdb) section)
7. Test agent configuration  (see [Test Configuration](markdown/conftest) section)
8. Integrate with external system (see [Connect with OPCUA](markdown/connopcua), [Connect with MQTT](markdown/connmqtt), [Connect with Active Directory](markdown/connad))
9. Start agent

### Type of deployments

#### Factory Digitalization

**Gagent** allows the integration of existing production lines and equipments within digital factory systems (MES and SCADA systems)

![Digital Factory](digitalfactory.png 'DigitalFactory')

#### IoT Integration

**Gagent** allows the integration on the cloud of existing devices 

![IoT Integration](cloud.png 'Cloud')

