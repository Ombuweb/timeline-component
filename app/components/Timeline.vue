<template>
  <AbsoluteLayout :left="timelinePositionX" @loaded="onAbsLayoutLoaded">
    <!-- Time Point/circle -->
    <Label
      top="10"
      left="5"
      style="
        height: 10;
        width: 10;
        border-radius: 50%;
        background-color: #bbb3b3;
      "
    />
    <!-- Timeline lines connecting the Time points/circles -->
    <!-- FIRST LINE -->
    <Label
      v-show="indx == 0"
      left="10"
      scaleY="2"
      :height="timelineConnectorH"
      width="1"
      :backgroundColor="timelineColor"
      :translateY="timelineStartPos"
    />
<!-- INNER LINES -->
    <Label
      v-show="(indx!=0)&&(indx!=dataSize-1)"
      scaleY="3"
      left="10"
      :height="timelineConnectorH"
      width="1"
      :backgroundColor="timelineColor"
         />
    <!-- LAST LINE -->
    <Label
      v-show="indx==(dataSize-1)"
      left="10"
      :height="timelineConnectorH"
      width="1"
      :backgroundColor="timelineColor"
      :translateY="timelineEndPos"
    />
  </AbsoluteLayout>
</template>
<script>
  import { Trace } from '@nativescript/core';
export default {
  props: {
    timelinePositionX: {
      type: Number,
      required: false,
      default: 150,
    },
    indx: {
      type: Number,
      required: true,
    },
    timelineColor: {
      type: String,
      required: false,
      default: "#bbb3b3",
    },
    timelineConnectorH: {
      type: Number,
      required: false,
      default: 30,
    },
    dataSize: {
      type: Number,
      required: true,
    },
    timelineStartPos: {
      type: Number,
      required: false,
      default: 25,
    },
    timelineEndPos: {
      type: Number,
      required: false,
      default: -10,
    }
  },
  computed:{
    refy(){
      return "tl-label-"+ this.indx;
    }
  },
created(){
 
//Trace.write(this.indx + ' dataset size' + this.dataSize, Trace.categories.Debug);
},
  methods: {
    onAbsLayoutLoaded(args) {
        args.object.android.getParent().setClipChildren(false);
        setTimeout(function(){
        //Trace.write(args.object.getMeasuredHeight(), Trace.categories.Debug)
        //Trace.write(args.object.parent.getMeasuredHeight(), Trace.categories.Debug)
        }, 100)
      //args.object.android.getParent().setClipToPadding(false);
    },
    
  },
};
</script>