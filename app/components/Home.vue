<template>
  <Page ref="page">
    <ActionBar>
      <Label text="Home" />
    </ActionBar>

    <StackLayout>
      
            <GridLayout rows="100" columns="*, *" class="p-20">
              <Label row="0" col="0" text="Hours worked for: " textWrap="true" class="h2" verticalAlignment="center"/>
              <ListPicker row="0" col="1" :items="months" selectedIndex=""></ListPicker>
              
            </GridLayout>
      <ListView
      id="tl-label-1"
        for="item in hours"
        height="100%"
        @loaded="onListViewLoaded($event)"
      >
        <v-template>
          <StackLayout >
            <AbsoluteLayout @loaded="onStLayoutLoaded">
              <!-- DATE -->
              <Label :text="item.date" />

              <!-- TIMELINE COMPONENT -->
              <Timeline :timelinePositionX="110" :indx="$index" :dataSize="hours.length"/>

              <!-- VALUE FOR A PARTICULAR DAY -->
              <Label  left="150" class="m-l-20 m-t-10 bg-white p-20 -rounded-lg">
                   <FormattedString>
                    <Span :text="item.hours"> </Span>
                    <Span text=" hours"> </Span>
                  </FormattedString>
              </Label>
            </AbsoluteLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import { Trace } from "@nativescript/core";
import { march_hours } from '../data/march_hours';

import Timeline from "./Timeline";

export default {
  data() {
    return {
      hours: march_hours,
      months: ['Sep']
    };
  },
  computed: {
    message() {
      return "Blank {N}-Vue";
    },
  },
 
  methods: {
    onPLoaded(args){

    }
    ,
    onListViewLoaded(args) {

      let chi =args.object.nativeView.setDividerHeight(-1);
            //Trace.write(args.object.eachChild(), Trace.categories.Debug)

     
    },
    onStLayoutLoaded(args) {
      args.object.android.getParent().setClipChildren(false);
      args.object.android.getParent().setClipToPadding(false);
    },
  },
  components:{
      Timeline
  }
};
</script>

<style scoped lang="scss">
@import "@nativescript/theme/scss/variables/blue";

// Custom styles
.fas {
  @include colorize($color: accent);
}
.bg-white{
    background-color: #ffffff;
}
Page {
  background-color: #fff3e8 ;
}
</style>
