/* eslint-disable no-console */
<template>
  <div id="single-date" class="single-date__calendar-view full-height">
    <div>
      <CalendarHeader
        :year="year"
        :month="month"
        @toggleMonth="toggleMonth"
        :headerProps="headerProps"
      />
    </div>

    <div>
      <div v-for="ev in currentEvents" :key="ev.description">
        <Event
          :event="ev"
          :is-selected="isSelected"
          :headerProps="headerProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import CalendarHeader from "~/components/calendar/CalendarHeader.vue";
import Event from "~/components/calendar/Event.vue";

export default {
  components: {
    CalendarHeader,
    Event,
  },
  props: {
    date: {
      type: Object,
      default: () => null,
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
      validator: (value) => value >= 0 && value <= 6,
    },
    eventsList: {
      type: Array,
      default: () => [],
    },

    headerProps: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {
      year: 0,
      month: 0,
      todayDate: 0,
      todayYear: 0,
      todayMonth: 0,
      selectedDate: null,
      weekStartDay: 0,
      months: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
      events: [
        {
          date: "2020/10/01",
          starthour: "13:00",
          endhour: "15:00",
          title: "Portes Ouvertes",
          description: "Questions à aborder : Logement",
        },
        {
          date: "2020/01/10",
          starthour: "15:00",
          endhour: "18:00",
          title: "Salon étudiant",
          description: "Toutes les questions",
        },
        {
          date: "2020/11/10",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Spécial",
        },
        {
          date: "2020/11/25",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Spécial enfants",
          image: "/index/event.jpg",
        },
        {
          date: "2020/11/06",
          starthour: "13:00",
          endhour: "15:00",
          title: "Journée d'information",
          description: "Jeunes dynamiques",
        },
      ],
      currentEvents: [],
      dates: [],
    };
  },
  mounted() {
    // Array store only dates
    for (let event of this.eventsList) {
      this.dates.push(moment(event.date).format("MM/YYYY"));
    }
    this.dates = [...new Set(this.dates)];
  },
  computed: {
    numDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },

    isCurrentMonth() {
      return this.todayMonth === this.month;
    },

    isCurrentYear() {
      return this.todayYear === this.year;
    },

    isSelected() {
      if (this.selectedDate) {
        return this.selectedDate.year === this.year &&
          this.selectedDate.month === this.month
          ? this.selectedDate.date
          : 0;
      }
      return 0;
    },
  },
  watch: {
    /* date(val) {
      this.setDate(val);
    }, */
  },
  created() {
    const date = new Date();

    this.year = this.mostRecentYear();
    this.month = this.mostRecentMonth();

    this.todayDate = date.getDate();
    this.todayYear = date.getFullYear();
    this.todayMonth = date.getMonth();

    this.weekStartDay =
      this.firstDayOfWeek >= 0 && this.firstDayOfWeek <= 6
        ? this.firstDayOfWeek
        : 0;

    this.currentYearEvents(this.mostRecentYear(), this.mostRecentMonth());

    var latest = new Date(Math.max.apply(null, this.events));
  },
  methods: {
    mostOlderYear() {
      var olderYearEvent = this.eventsList.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0];

      return new Date(olderYearEvent.date).getFullYear();
    },

    mostOlderMonth() {
      var olderYearEvent = this.eventsList.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )[0];
      return new Date(olderYearEvent.date).getMonth();
    },

    mostRecentYear() {
      var recentYearEvent = this.eventsList.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      return new Date(recentYearEvent.date).getFullYear();
    },

    mostRecentMonth() {
      var recentYearEvent = this.eventsList.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )[0];
      return new Date(recentYearEvent.date).getMonth();
    },

    currentYearEvents(currentY, currentM) {
      var currentEventsByYear = [];
      currentEventsByYear = this.eventsList.filter(
        (e) => new Date(e.date).getFullYear() === currentY
      );

      this.currentEvents = currentEventsByYear.filter(
        (e) => new Date(e.date).getMonth() === currentM
      );

      this.currentEvents.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
      });
    },

    currentYearEventsFilter(currentY, currentM) {
      var currentEventsByYear = this.eventsList.filter(
        (e) => new Date(e.date).getFullYear() === currentY
      );

      return currentEventsByYear.filter(
        (e) => new Date(e.date).getMonth() === currentM
      );
    },

    minusOneMonth(d) {
      const month = d.getMonth();
      d.setMonth(d.getMonth() - 1);
      while (month === d.getMonth()) {
        d.setDate(d.getDate() - 1);
      }
      return d;
    },

    plusOneMonth(d) {
      const month = d.getMonth();
      d.setMonth(d.getMonth() + 1);
      while (month === d.getMonth()) {
        d.setDate(d.getDate() + 1);
      }
      return d;
    },

    toggleMonth(direction) {
      let thismonth = this.month;
      let thisyear = this.year;

      let newMonth = this.month + Number(direction);
      let newYear = this.year;

      if (direction === 1) {
        thismonth += 2;
        if (thismonth < 0) {
          thismonth = 1;
          thisyear += 1;
        }

        if (thismonth > 11) {
          if (thismonth > 12) {
            thismonth = 1;
            thisyear += 1;
          } else {
            thismonth = 12;
          }
        }
      } else {
        if (thismonth <= 0) {
          thismonth = 12;
          thisyear -= 1;
        }

        if (thismonth > 11) {
          if (thismonth > 12) {
            thismonth = 1;
            thisyear += 1;
          } else {
            thismonth = 12;
          }
        }
      }

      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1;
      }

      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }

      var beforedates = this.dates.filter(function (d) {
        return (
          new Date("01/" + d) - new Date("01/" + thismonth + "/" + thisyear) <=
          0
        );
      });

      var afterdates = this.dates.filter(function (d) {
        return (
          new Date("01/" + d) - new Date("01/" + thismonth + "/" + thisyear) > 0
        );
      });

      var date;

      if (direction === 1) {
        date = afterdates[afterdates.length - 1];
      } else {
        date = beforedates[0];
      }
      if (date === undefined) {
        if (
          (thismonth + "/" + thisyear).toString() !==
            moment(
              new Date(
                new Date(
                  moment("01/" + this.dates[0]).format("YYYY/DD/MM")
                ).setMonth(
                  new Date(
                    moment("01/" + this.dates[0]).format("YYYY/DD/MM")
                  ).getMonth() + 1
                )
              )
            )
              .format("MM/YYYY")
              .toString() &&
          (thismonth + "/" + thisyear).toString() !==
            moment(
              new Date(
                new Date(
                  moment("01/" + this.dates[this.dates.length - 1]).format(
                    "YYYY/DD/MM"
                  )
                ).setMonth(
                  new Date(
                    moment("01/" + this.dates[this.dates.length - 1]).format(
                      "YYYY/DD/MM"
                    )
                  ).getMonth() - 1
                )
              )
            ).format("MM/YYYY")
        ) {
          if (direction === 1) {
            this.month = new Date(
              moment("01/" + thismonth + "/" + thisyear).format("YYYY/DD/MM")
            ).getMonth();
            this.year = new Date(
              moment("01/" + thismonth + "/" + thisyear).format("YYYY/DD/MM")
            ).getFullYear();

            this.currentYearEvents(this.year, this.month);
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        if (
          new Date(moment("01/" + date).format("YYYY/DD/MM")).getFullYear() >=
          1970
        ) {
          this.month = new Date(
            moment("01/" + date).format("YYYY/DD/MM")
          ).getMonth();
          this.year = new Date(
            moment("01/" + date).format("YYYY/DD/MM")
          ).getFullYear();
          this.currentYearEvents(this.year, this.month);
        }
      }
    },

    selectDate(date) {
      if (date) {
        this.selectedDate = {
          year: this.year,
          month: this.month,
          date,
        };
        this.$emit("selectDate", this.selectedDate);
      }
    },

    setDate(date) {
      this.year = date.year;
      this.month = date.month;
      this.selectedDate = this.date;
    },
  },
};
</script>

<style lang="scss" scoped>
#single-date {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 27em;
}

.single-date__calendar-view {
  max-width: 100%;
  background-color: white;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  color: #0d1e44;
}

@media only screen and (min-width: 769px) {
  .full-height {
    height: 90% !important;
  }
}
</style>