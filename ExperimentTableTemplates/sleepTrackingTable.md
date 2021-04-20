### What is this template about?
This template is all about tracking sleeping habits. As all other templates in this repository, the template will change from time to time. After tracking my sleep habits for around a week, I discovered, that the parameters listed below help me to improve my sleep and well being. 

### How to use it?
In this document you can only find the template in this markdown and the corresponding SQL query to create the table. Have fun if you can use it. 




### Example
| Calendarweek | Date     | day       | How relaxed do you feel? | bedtime | wake up time |
| ------------ | -------- | --------- | ------------------------ | ------- | ------------ |
|              | 01.09.21 | Monday    | 3                        | 22:00   | 05:00        |
|              | 02.09.21 | Tuesday   | 4                        | 22:30   | 06:00        |
|              | 03.09.21 | Wednesday | 1                        | 22:00   | 05:30        |
|              | 04.09.21 | Thursday  | 5                        | 22:15   | 06:00        |
|              | 05.09.21 | Friday    | 4                        | 24:00   | 06:30        |
|              | 06.09.21 | Saturday  | 3                        | 23:30   | 07:00        |
|              | 07.09.21 | Sunday    | 2                        | 22:00   | 06:00        |

```typescript
interface sleepTrackingEntry{
    date: Date;
    day: Day;
    feeling: number; // between [1,..,5]
    bedtime: string; // format "hh:mm"
    wakeUpTime: string; // format "hh:mm"
}
```

### Create the table in your SQL database

``` sql
CREATE TABLE sleepTrackingTable(
    entryId INT NOT NULL IDENTITY PRIMARY KEY ,
    calWeek INT,
    date DATE,
    weekDay VARCHAR(10),
    bedtime VARCHAR(5),
    wakeUpTime VARCHAR(5),
    feeling INT,
)
```

