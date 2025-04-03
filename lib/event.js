
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
 * @property {string} src - The src of the event.
 * @property {string[]} tags - The tags of the event. 
 * @property {string} type - The type of the event.
 */
class Event {
	/**
	 * Creates an instance of Event.
	 * @param {string} name - The name of the event.
	 * @param {TimeRange} date - The date of the event.
	 * @param {string} src - The src of the event.
	 * @param {string[]} tags - The tags of the event. 
	 * @param {string} type - The type of the event.
	 */
	constructor(name, date, src, tags, type) {
		this.name = name;
		this.date = date;
		this.src = src;
		this.tags = tags;
		this.type = type;
	}
}

/**
 * @class EventList
 * Represents a list of events.
 * @members
 * @property {Event[]} eventList
 */
class EventList {
	/**
	 * @type {Map<string, Array<number> >}
	 */
	#eventIdxPreSrc;
	/**
	 * @type {Map<string, Array<number> >}
	 */
	#eventIdxPreTag;
	/**
	 * @type {Event[]}
	 */
	eventList;

	constructor() {
		this.clear();
	}
	/**
	 * rearrange the events in the list
	 */
	#rearrange() {
		/**
		 * @type {Array<number>}
		 */
		var idxLst = [];
		for (var i = 0; i < this.eventList.length; i++) idxLst.push(i), idxTarget.push(i);
		var idxTarget = [];

		// sort the events by date
		idxLst.sort((a, b) => {
			if (this.eventList[a].date.start > this.eventList[b].date.start) return 1;
			else if (this.eventList[a].date.start < this.eventList[b].date.start) return -1;
			else return 0;
		});
		for (var i = 0; i < this.eventList.length; i++) idxTarget[idxLst[i]] = i;
		
		let newEventList = [];
		for (var i = 0; i < idxLst.length; i++) newEventList.push(this.eventList[idxLst[i]]);
		this.eventList = newEventList;
		
		// remap the event index
		for (let [src, idxPreSrc] of this.#eventIdxPreSrc) {
			for (var i = 0; i < idxPreSrc.length; i++) idxPreSrc[i] = idxTarget[idxPreSrc[i]];
			this.#eventIdxPreSrc[src] = idxPreSrc;
		}
		for (let [tag, idxPreTag] of this.#eventIdxPreTag) {
			for (var i = 0; i < idxPreTag.length; i++) idxPreTag[i] = idxTarget[idxPreTag[i]];
			this.#eventIdxPreTag[tag] = idxPreTag;
		}
	}
	/**
	 * @returns {Event[]}
	 */
	#parseJson(jsonFile) {

	}
	/**
	 * add an event
	 * @method addEvent - Adds an event to the list.
	 * @param {Event} event - The event to add.
	*/
	addEvent(event) {
		
	}
	/**
	 * add some events
	 * @method addEvents - Adds an array of events to the list.
 	 * @param {Event[]} eventList - The array of events to add.
	 */
	addEvents(eventList) {
		
	}

	/**
	 * clear all the events
	 */
	clear() {
		this.eventList = [];
		this.#eventIdxPreSrc = Map();
		this.#eventIdxPreTag = Map();
	}

	getEvents() {
		
	}

	/**
	 * @method importEvents - Imports events from a JSON file.
	 * @param {string | string[]} src - The source of the JSON file.
	 * @returns {number} - The status of the import.
	 */
	importEvents(src) {
		if (src.constructor === Array) {
			for (var i = 0; i < src.length; i++) this.importEvents(src[i]);
			return ;
		}
		let jsonFile;
		let events = this.#parseJson(src, jsonFile);
		for (var i = 0; i < events.length; i++) {
			this.eventList.push(events[i]);
			this.#eventIdxPreSrc.push(this.eventList.length - 1);
			for (var j = 0; j < events.length; j++) {
				if (this.#eventIdxPreTag[events[i].tags[j]] == undefined)
					this.#eventIdxPreTag[events[i].tags[j]] = [];
				this.#eventIdxPreTag[events[i].tags[j]].push(this.eventList.length - 1);
			}
		}
	}
}