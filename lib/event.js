
/**
 * @class TimeRange
 * Represents a time range with a start and end time.
 * @members
 * @property {Date} start - The start time of the range.
 * @property {Date} end - The end time of the range.
 * @constructor
 * @param {Date} start - The start time of the range.
 * @param {Date} end - The end time of the range.
 * @example
 * const range = new TimeRange(new Date('2023-10-01T10:00:00'), new Date('2023-10-01T12:00:00'));
 * console.log(range.start); // Output: 2023-10-01T10:00:00.000Z
 * console.log(range.end); // Output: 2023-10-01T12:00:00.000Z
 */
class TimeRange {
	/**
	 * Creates an instance of TimeRange.
	 * @param {Date} start - The start time of the range.
	 * @param {Date} end - The end time of the range.
	 */
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

/**
 * @class Event
 * Represents an event with a name, date, and time.
 * @members
 * @property {string} name - The name of the event.
 * @property {TimeRange} date - The date of the event.
 * @property {string} time - The time of the event.
 * @property {string} type - The type of the event.
 * @constructor
 * @param {string} name - The name of the event.
 * @param {TimeRange} date - The date of the event.
 * @param {string} time - The time of the event.
 */
class Event {
	/**
	 * Creates an instance of Event.
	 * @param {string} name - The name of the event.
	 * @param {TimeRange} date - The date of the event.
	 * @param {string} time - The time of the event.
	 * @param {string} type - The type of the event.
	 */
	constructor(name, date, time, type) {
		this.name = name;
		this.date = date;
		this.time = time;
		this.type = type;
	}
}

