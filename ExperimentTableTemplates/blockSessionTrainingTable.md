### What is this template about?

Mostly I try to split my workdays into three parts. 

- Block 1 (08:00-12:00),
- Block 2 (13:00-17:00)
- Block 3 (20:00-22:00)

To work as focused as possible I try to prepare the workload for the corresponding blocks one day before. To measure how much :shit: I actually get done and how much I "think" I get done, I created the "Blocksesison table". It should help me to figure out how to work more efficient and how to get more time for the fun stuff in life (you know like :bike:, :runner:, :dancers:, :musical_keyboard: , :world_map:  )

### How to use it?

Create your own template, for example in Excel, SQL or wherever you want to store your data stuff. For easy experimentation I created an Excel, that I print out in the beginning of the week. I fill it out by pen and review it at the end of the week. For me this is mostly Sunday evening. 


### Example

| Date     | Weekday | Blockplanning Session | Rating | Inhibitors                                                   | Comments                   |
| -------- | ------- | --------------------- | ------ | ------------------------------------------------------------ | -------------------------- |
| 01.04.21 | Monday  | 1                     | 3      | Failed to work on my tasks because of meetings, calls, appointments, or whatever else | Some usfeful comments here |
| 01.04.21 | Monday  | 2                     | 3      | bli bla blu                                                  | Some usfeful comments here |
| 01.04.21 | Monday  | 3                     | 5      | bli bla blu                                                  | Some usfeful comments here |

```typescript
interface blockPlanningEntry{
    entryId: string; //Should be autoassigned or autoincremented
    date: Date;
    weekday: string;
    rating: number; // in the range of [1,...,5]
    inhibitors: string;
    comments: string;
}
```



### Create the table in your SQL Database

```sql
CREATE TABLE BlockPlanningTable(
    entryId INT IDENTITY PRIMARY KEY,
    date Date,
    weekday VARCHAR(10) NOT NULL,
    rating INT CHECK (rating <= 5 AND rating >0) NOT NULL,
    inhibitors VARCHAR(300),
    comments VARCHAR(300)
);

SELECT * FROM BlockPlanningTable;
```