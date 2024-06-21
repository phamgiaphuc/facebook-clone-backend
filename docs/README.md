# Facebook Clone Backend - Documents

## Logger levels
- Summarize:

| Log Level |	Importance |
|-----------|------------|
| Fatal |	One or more key business functionalities are not working and the whole system doesn’t fulfill the business functionalities. |
| Error |	One or more functionalities are not working, preventing some functionalities from working correctly. |
| Warn |	Unexpected behavior happened inside the application, but it is continuing its work and the key business features are operating as expected. |
| Info |	An event happened, the event is purely informative and can be ignored during normal operations. |
| Debug |	A log level used for events considered to be useful during software debugging when more granular information is needed. |
| Trace |	A log level describing events showing step by step execution of your code that can be ignored during the standard operation, but may be useful during extended debugging sessions. |

- Documents: [Winston docs](https://github.com/winstonjs/winston)
