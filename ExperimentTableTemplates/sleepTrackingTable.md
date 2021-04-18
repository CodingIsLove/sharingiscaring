### What is this template about?
This template is all about tracking sleeping habits. As all other templates in this repository, the template will change from time to time. After tracking my sleep habits for around a week, I discovered, that the parameters listed below help me to improve my sleep and well being. 

### How to use it?
In this document you can only find the template in this markdown and the corresponding SQL query to create the table. Have fun if you can use it. 




### Example
| Calendarweek | Date     | day       | How relaxed do you feel? | wake up time | Hours slept |
| ------------ | -------- | --------- | ------------------------ | ------------ | ----------- |
|              | 01.09.21 | Monday    | 3                        | 05:00        | 3           |
|              | 02.09.21 | Tuesday   | 4                        | 06:00        | 4           |
|              | 03.09.21 | Wednesday | 1                        | 05:30        | 5           |
|              | 04.09.21 | Thursday  | 5                        | 06:00        | 5           |
|              | 05.09.21 | Friday    | 4                        | 06:30        | 2           |
|              | 06.09.21 | Saturday  | 3                        | 07:00        | 1           |
|              | 07.09.21 | Sunday    | 2                        | 06:00        | 1           |

```typescript
interface sleepTrackingEntry{
    date: Date;
    day: Day;
    feeling: number; // between [1,..,5]
    wakeUpTime: string; // format "hh:mm"
    hoursSlept: number; // [1,..,12]
}
```

### Create the table in your SQL database

``` sql
CREATE TABLE sleepTrackingTable(
    entryId INT NOT NULL IDENTITY PRIMARY KEY ,
    calWeek INT,
    date DATE,
    weekDay VARCHAR(10),
    wakeUpTime VARCHAR(5),
    feeling INT,
    hoursSlept INT
)
```

