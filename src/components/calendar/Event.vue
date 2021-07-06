<template>
  <div class="columns is-12 event is-mobile" v-bind:class="headerProps.class">
    <div class="column is-3 mobile-position">
      <div class="column content-view content-view-day is-paddingless">
        {{ event.date | day }}
      </div>
      <div class="column content-view is-paddingless">
        {{ event.date | month }}
      </div>
    </div>
    <div class="box-image is-hidden-desktop">
      <div class="cal-separator" v-if="event.image === null"></div>
      <g-image
        class="image-event"
        v-if="event.image"
        :src="event.image.file.url"
      ></g-image>
    </div>
    <div class="box-image is-hidden-touch">
      <div class="cal-separator" v-if="event.image === null"></div>

      <div class="cal-separator cal-separator-desktop" v-if="event.image"></div>
      <g-image
        class="image-event"
        v-if="event.image"
        :src="event.image.file.url"
      ></g-image>
    </div>
    <div class="column has-text-left is-7 content-view-body">
      <div class="column is-paddingless content-view-hour">
        {{ event.startTime | format }} - {{ event.endTime | format }}
      </div>
      <div class="column is-paddingless content-view-title">
        {{ event.title }}
      </div>
      <div class="column is-paddingless content-view-description">
        {{ event.description }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    event: {
      type: Object,
      default: () => [],
    },
    isSelected: {
      type: Number,
      default: 0,
    },
    headerProps: {
      type: Object,
      default: () => [],
    },
  },
  data() {
    return {
      hover: true,
    };
  },
  filters: {
    // Filter definitions
    format(value) {
      return moment(String(value)).format("HH:mm");
    },
    day(value) {
      var days = ["01", "02", "03", "04", "04", "05", "06", "07", "08", "09"];
      var date = moment(String(value)).format("YYYY/MM/DD");
      if (new Date(date).getDate() < 10) {
        return days[new Date(value).getDate()];
      } else {
        return new Date(value).getDate();
      }
    },
    month(value) {
      var months = [
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
      ];
      var date = moment(String(value)).format("YYYY/MM/DD");
      return months[new Date(date).getMonth()];
    },
  },
  methods: {
    selectDate(date) {
      this.$emit("selectDate", date);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-view {
  color: #1b66a9;
  font-size: 1em;
  font-weight: bold;
  margin-top: 1ex;
}

.content-view-hour {
  color: #1b66a9;
}

.content-view-description {
  color: #1b66a9;
  font-size: 14px;
}

.content-view-day {
  color: #1b66a9;
  font-size: 2em;
}

.cal-separator {
  margin-top: 3.5ex;
  margin-left: -1.5em;
  border-left: 1.2ex solid #1b66a9;
  height: 5em;
}

.content-view-title {
  font-weight: bold;
  color: #1b66a9;
}

.content-view-body {
  margin-top: 1.5em;
}

.event {
  border-bottom: 1px solid #1b66a9;
  margin-left: 0px !important;
  margin-right: 0px !important;
}

@media only screen and (min-width: 769px) {
  .event:hover .image-event {
    display: block;
  }

  .event:hover .cal-separator-desktop {
    display: none;
  }
}

@media only screen and (min-width: 769px) {
  .is-about-Event {
    .content-view {
      font-weight: 800 !important;
      font-size: 1.5em !important;
    }

    .cal-separator {
      margin-top: 3.5ex;
      margin-left: -1.5em;
      border-left: 1.8ex solid #1b66a9;
      height: 5em;
    }

    .content-view-body {
      font-size: 1.5em;
      margin-top: 0.5ex;
    }
  }

  .image-event {
    width: 5em;
    margin-left: -3ex;
    height: 6em;
    margin-top: 2ex;
    margin-right: 4ex;
    display: none;
  }
}

@media only screen and (max-width: 414px) {
  .image-event {
    width: 3em;
    margin-left: 0ex;
    height: 4em;
    margin-top: 4ex;
    margin-right: 0ex;
  }

  .event {
    margin-left: 1ex;
    margin-right: 5.5ex;
  }

  .content-view-day {
    color: #1b66a9;
    font-size: 1.5em !important;
  }

  .mobile-position {
    margin-top: 0.5em !important;
    margin-left: 0.5em;
  }

  .content-view-description {
    font-size: 0.6em !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 768px) {
  .image-event {
    width: 5em;
    margin-left: 2ex;
    height: 6em;
    margin-top: 2ex;
    margin-right: 4ex;
  }
}

@media only screen and (max-width: 768px) {
  .mobile-position {
    margin-top: 0.5em !important;
    margin-left: 0.5em;
  }

  .content-view-day {
    color: #1b66a9;
    font-size: 1.5em !important;
  }

  .content-view-description {
    color: #1b66a9;
    font-size: 0.6em;
  }

  .content-view-title {
    font-weight: bold;
    color: #1b66a9;
    font-size: 0.8em;
  }

  .content-view {
    color: #1b66a9;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 1ex;
  }

  .cal-separator {
    margin-top: 3.8ex;
    margin-left: 1em;
    border-left: 1.2ex solid #1b66a9;
    height: 4em;
  }
}
</style>