# Calendar App with Primer style

Clone from Google Calendar using Primer, the goals is to be able to maintain schedule easily without compromising user experience.

## Getting Started

In progress

### Installing

For security reason, I didn't provide the config folder containing all credentials for the cosmos DB, ask me if you really need it.

1. `git clone https://github.com/doqax/calendar-primer`
2. `cd ./calendar-primer/ && yarn install`
3. `yarn start`

## Documentation

In progress

## Deployment

In progress

## Built With

- [React](*)
- [momentjs](*)

## License

In progress

## Acknowledgments

In progress

## Todo

- [ X ] useReducer and refactor current way of dealing with state (or use redux or something)

I will not use them for now. The core app should be working with useState.

- [ X ] Implement date in calendar week and calendar day
- [ ] manage hours
- [ ] Add features to small calendar (onClick change month calendar, onClick change week calendar, onDoubleClick change day calendar and switch to day calendar, week view css, current day always present, css when date change)
- [ ] Add Year view
- [ ] Add Other Calendars features, disable view of holidays for example
- [ ] Find a way to manage listener efficiently instead of using it on every cells
- [ ] Probably refactor, fix bug and write test at that point
- [ ] Add drag and drop feature
- [ ] Make it work with localStorage and start learning about PWA

- [ ] Make API for events
- [ ] I'd like to go SQL this time
- [ ] Test it
- [ ] Add it to the front-end with pop-up and synchronization based on the DnD
