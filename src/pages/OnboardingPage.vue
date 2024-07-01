<template>
<q-page padding>
    <!-- content -->
    <div class="q-pa-md onboarding" >
      <q-stepper
      v-model="step"
      ref="stepperRef"
      color="dark"
      animated
      contracted
      class="no-box-shadow p-0"
    >
      <q-step
        :name="1"
        title="Step 1"
        :done="step > 1"
        color="dark"
      >
      <q-img src="/img/onboarding.webp" :ratio="1" />
      <h5 class="text-center">How are you feeling?</h5>

      <div class="q-pa-0" style="max-width: 300px">
        <q-input
          ref="step1Ref"
          v-model="step1"
          label="type your answer"
          :rules="[(val) => (val && val.length > 0) || 'required']"
        />
          <!-- <q-input v-model="text" filled type="textarea" /> -->
      </div>
        <!-- <q-input
          ref="step1Ref"
          v-model="step1"
          label="Any number"
          :rules="[(val) => (!isNaN(val) && !!val) || 'must be a number']"
        /> -->
      </q-step>

      <q-step
        :name="2"
        title="Step 2"
        :done="step > 2"
        color="dark"
      >
      <q-img src="/img/onboarding.webp" :ratio="1" />
      <h5 class="text-center">How can you care for yourself today?</h5>
        <q-input
          ref="step2Ref"
          v-model="step2"
          label="type your answer"
          :rules="[(val) => (val && val.length > 0) || 'required']"
        />
      </q-step>

      <q-step
        :name="3"
        title="Step 3"
        :done="step > 3"
        color="dark"
      >
      <q-img src="/img/onboarding.webp" :ratio="1" />
      <h5 class="text-center">Your e-mail address</h5>
        <q-input
          ref="step3Ref"
          v-model="step3"
          label="type your email"
          :rules="[(val) => (val && val.length > 0) || 'required']"
        />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step > 1" flat color="dark" @click="onBackStep" label="Back" class="q-mr-sm q-pl-none"></q-btn>
          <q-btn @click="onContinueStep" color="dark" :label="step === 3 ? 'Submit' : 'Continue'"></q-btn>
        </q-stepper-navigation>
      </template>
    </q-stepper>


        <!-- <q-stepper v-model="step" ref="stepper" contracted color="dark" animated class="no-box-shadow p-0">
            <q-step :name="1" title="Select campaign settings" class="p-0" :done="step > 1" color="dark">
                <q-img src="/img/onboarding.webp" :ratio="1" />
                <h5 class="text-center">How are you feeling?</h5>

                <div class="q-pa-0" style="max-width: 300px">
                    <q-input v-model="text" filled type="textarea" />
                </div>
            </q-step>

            <q-step :name="2" title="Create an ad" color="dark">
                <q-img src="/img/onboarding.webp" :ratio="1" />
                <h5 class="text-center">How can you care for yourself today?</h5>
                <div class="q-pa-0" style="max-width: 300px">
                    <q-input v-model="text" filled type="textarea" />
                </div>
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation>
                    <q-btn v-if="step > 1" flat color="dark" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                      <q-btn @click="$refs.stepper.next()" color="dark" size="md" :label="step === 2 ? 'Finish' : 'Continue'" />
                    </q-stepper-navigation>
            </template>
        </q-stepper> -->
    </div>
</q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from "vue-router";

// import { useRouter }  from 'vue'

export default {
  setup () {
    const stepperRef = ref(null)
    const step1Ref = ref(null)
    const step2Ref = ref(null)
    const step3Ref = ref(null)
    const step = ref(1)
    const step1 = ref("")
    const step2 = ref("")
    const step3 = ref("")
    const router = useRouter();

     function onContinueStep() {
      switch (step.value){
        case 1:
          step1Ref.value.validate()
          if(!step1Ref.value.hasError)
          {
            stepperRef.value.next()
          }
          break;
        case 2:
          step2Ref.value.validate()
          if(!step2Ref.value.hasError)
          {
            stepperRef.value.next()
          }
          break;
        default:
          step3Ref.value.validate()
          if(!step3Ref.value.hasError)
          {
            router.push({ path: '/aktivitas' })
          }
          break;
      }
    }
    function onBackStep(){
      stepperRef.value.previous()
    }

    return {
      step,
      step1,
      step2,
      step3,
      stepperRef,
      step1Ref,
      step2Ref,
      step3Ref,
      onContinueStep,
      onBackStep
    }
  }
}
</script>
