<template>
<q-page padding>
    <!-- content -->
    <div class="q-pa-md">
        <q-stepper v-model="step" ref="stepper" contracted color="dark" animated class="no-box-shadow p-0">
            <q-step :name="1" title="Select campaign settings" icon="settings" class="p-0" :done="step > 1" color="dark">
                <q-img src="/img/onboarding.webp" :ratio="1" />
                <h5 class="text-center">How are you feeling?</h5>

                <div class="q-pa-0" style="max-width: 300px">
                    <q-input v-model="text" filled type="textarea" />
                </div>
            </q-step>

            <q-step :name="2" title="Create an ad" icon="add_comment" color="dark">
                <q-img src="/img/onboarding.webp" :ratio="1" />
                <h5 class="text-center">How can you care for yourself today?</h5>
                <div class="q-pa-0" style="max-width: 300px">
                    <q-input v-model="text" filled type="textarea" />
                </div>
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation>
                    <q-btn @click="$refs.stepper.next()" color="dark" size="md" :label="step === 2 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="dark" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
            </template>
        </q-stepper>
    </div>
</q-page>
</template>

<script>
import {
    ref
} from 'vue'

export default {
    setup() {
        return {
            step: ref(1)
        }
    }
}
</script>
