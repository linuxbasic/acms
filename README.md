# Advanced Container Management System

Dieses Projekt ist im Rahmen des [Umma Hüsla Hackathon 2018](https://uh18.diin.io) durch das Team der [HSR](https://www.hsr.ch) entstanden.

## Requirements

- [Docker Compose](https://docs.docker.com/compose/install/)

## How to run

**Setup**

1. run  `docker-compose up`
2. run `docker-compose exec api python manage.py migrate`

**Links**

- [Admin UI](http://localhost:3000/#/admin/containers)
- [Pickup UI](http://localhost:3000/#/pickup)
- [API UI](http://localhost:8000/graphql)
- [Tracker Data API UI](https://containertracker.data.thethingsnetwork.org)

## Inception Deck

### Elevator Pitch

Für ein Entsorgungsunternehmen
welches Kontainer bereitstellt und nach dem befüllen wiederr abholt,
soll das Advanced Container Management System (ACMS) die Position jedes Kontainers tracken
und die Kommunikation zwischen dem Entsorgungsunternehmen und seiner Kunden standardisieren.
Im Gegensatz zum branchenüblichen Prozess benötigt unser System erheblich weniger manuelle Schritte und involvierte Personen.


### Abgrenzung

**In Scope**

- Kommunikation
- Tracking
- Identification
- Priority
- Container returning process

**Out of Scope**

- Transportmanagement
- Container-Type
- Cost-Calculation
- Container ordering process
