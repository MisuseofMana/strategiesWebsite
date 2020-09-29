<template>
    <div>
        <div class="block flexCenter">
            <img class="logoConstraint" src="../assets/imgs/logos/rehab.jpg"/>
            <h2 class="subtitle">Join our Rehab Team</h2>
        </div>

        <div class="container">
            <form id="rehab-form" @submit.prevent="processForm">
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" name="firstName" placeholder="First Name" value="">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-account"></i>
                        </span>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Last Name" value="">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-account"></i>
                        </span>
                    </div>
                </div>
    
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Email" value="">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-email"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">How Were You Referred?</label>
                    <div class="control has-icons-left">
                        <input class="input" type="text" placeholder="Referral" value="">
                        <span class="icon is-small is-left">
                        <i class="mdi mdi-comment-question-outline"></i>
                        </span>
                    </div>
                </div>

                <div class="file has-name is-full-width">
                <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                    <span class="file-cta">
                    <span class="file-icon">
                        <i class="mdi mdi-upload"></i>
                    </span>
                    <span class="file-label">
                        Upload
                    </span>
                    </span>
                    <span class="file-name">
                    Please attach your Resume.
                    </span>
                </label>
                </div>

                <br>

                <div class="field">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                applicant: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    referral: '',
                }
                
            }
        },
        methods: {
            proccessForm() {

            }
        }
    }
</script>

<style scoped>
.field {
    margin-bottom:20px;
}
</style>