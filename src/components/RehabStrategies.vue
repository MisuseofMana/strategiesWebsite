<template>
<div>
    <div class="block flexCenter has-text-centered">
        <img class="logoConstraint" src="../assets/imgs/logos/rehab.jpg"/>
        <h2 class="sub-title">“A Trustworthy, Reliable Provider of Therapy Services Since 2007”</h2>
    </div>

    <hr>

    <div class="box">
    <div class="columns is-variable is-8">
        <div class="column is-two-thirds">
            <div class="container">
                <h1 class="title">What is Rehab Strategies?</h1>
                <p>
                    Rehab Strategies is a provider of Physical, Occupational and Speech Therapy in addition to in-house
                    Wellness Direction. We proudly offer our expertise to Hospitals, Outpatient Centers, Skilled Nursing
                    Facilities, Assisted and Independent Living Centers. Owned and operated by Therapists, Rehab
                    Strategies builds and provides therapy teams that are highly motivated, efficient and produce cost-effective outcomes.
                </p>
                
                <br>

                <h1 class="title">A Partnership Built Upon Trust</h1>
                <p>
                    When you partner with Rehab Strategies you will enjoy a fully turnkey experience. We provide staff
                    oversite, recruiting and hiring processes, including management that understands all aspects of Rehab.
                    We cover all payroll taxes and benefits for our therapists. Our contract is configured to assure that our
                    clients receive a guaranteed profit from our Therapy Services.
                </p>
            </div>

            <br>

            <transition name="fade" mode="out-in">
            <div :class="{ 'is-active' : isActive }" v-if="isActive" key="physical" class="modal">
                <div @click="toggleModal()" class="modal-background"></div>
                <div class="modal-content">
                    <div class="container">
                        <div class="box">
                            <div class="content">
                                <p class="title">
                                Physical Therapy
                                </p>
                                <p class="subtitle">
                                : therapy for the preservation, enhancement, or restoration of movement and physical function impaired or threatened by disease, injury, or disability that utilizes therapeutic exercise, physical modalities (such as massage and electrotherapy), assistive devices, and patient education and training — called also physiotherapy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="toggleModal()" class="modal-close is-large" aria-label="close"></button>
            </div>
            </transition>

            <transition name="fade" mode="out-in">
            <div :class="{ 'is-active' : OccIsActive }" v-if="OccIsActive" key="occ" class="modal">
                <div @click="toggleOccModal()" class="modal-background"></div>
                <div class="modal-content">
                    <div class="container">
                        <div class="box">
                            <div class="content">
                                <p class="title">
                                Occupational Therapy
                                </p>
                                <p class="subtitle">
                                : therapy based on engagement in meaningful activities of daily life (such as self-care skills, education, work, or social interaction) especially to enable or encourage participation in such activities despite impairments or limitations in physical or mental functioning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="toggleOccModal()" class="modal-close is-large" aria-label="close"></button>
            </div>
            </transition>
            
            <transition name="fade" mode="out-in">
            <div :class="{ 'is-active' : SpeechIsActive }" v-if="SpeechIsActive" key="speech" class="modal">
                <div @click="toggleSpeechModal()" class="modal-background"></div>
                <div class="modal-content">
                    <div class="container">
                        <div class="box">
                            <div class="content">
                                <p class="title">
                                Speech Therapy
                                </p>
                                <p class="subtitle">
                                : therapeutic treatment of impairments and disorders of speech, voice, language, communication, and swallowing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="toggleSpeechModal()" class="modal-close is-large" aria-label="close"></button>
            </div>
            </transition>
            
        </div>
 
        <div class="column">
            <div class="container flexCenter has-text-centered">
                <h1 class="title">The Three Therapies</h1>
            <div class="columns flexCenter">
                     <button @click="toggleModal()" class="button is-primary"><span class="icon"><i class="mdi mdi-arm-flex-outline"></i></span><span>Physical Therapy</span></button>
                        <br>
                     <button @click="toggleOccModal()" class="button is-primary"><span class="icon"><i class="mdi mdi-coffee-outline"></i></span><span>Occupational Therapy</span></button>
                        <br>
                     <button @click="toggleSpeechModal()" class="button is-primary"><span class="icon"><i class="mdi mdi-account-voice"></i></span><span>Speech Therapy</span></button>

                <br>
                <hr>

                        <a href="/assets/wellnessProgram.pdf" download>
                        <div class="container flexCenter">
                        <h1 class="title has-text-centered">Download our Wellness Strategy PDF</h1>
                        <button class="button is-primary"><span class="icon"><i class="mdi mdi-newspaper-variant-outline"></i></span><span>Download!</span></button>
                        </div>
                        </a>
    <br>
            </div>
            </div>
        </div>
    </div>
    </div>

    <div class="box">
        <div class="columns">
            <div class="level">
                <div class="column">
                    <img src="../assets/imgs/rehab.jpg"/>
                </div>
                <div class="column">
                    <div class="flexCenter content">
                        <h2 class="title">Work for Rehab Strategies - we offer:</h2>
                        <ul>
                            <li>Clinical Freedom</li>
                            <li>Professional Growth</li>
                            <li>Annual CEU Allotment</li>
                            <li>Generous PTO Accrual</li>
                            <li>Medical, Dental, Vision, Life and Disability Insurance</li>
                        </ul>
                        <br>
                    <router-link to="/RehabForm"><button class="button is-primary"><span class="icon"><i class="mdi mdi-file-document-outline"></i></span><span>Apply To Rehab Strategies Online</span></button></router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="box">
    <section class="section">
            <h1 class="title">Partner with Rehab Strategies</h1>
            <div class="content">
            <p>
                When you partner with Rehab Strategies you will enjoy a fully turnkey experience. We provide staff
                oversite, recruiting and hiring processes, including management that understands all aspects of Rehab.
                We cover all payroll taxes and benefits for our therapists. Our contract is configured to assure that our
                clients receive a guaranteed profit from our Therapy Services.
            </p>
            </div>
    </section>

    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="content">
                    <h3>Accountability and Performance</h3>
                    <ul>
                        <li>Higher Standards – Highly ethical clinical practice so you can rest easy.</li>
                        <li>Oversite – Onsite Management provided by experienced Directors of Rehab.</li>
                        <li>Results – Improved Clinical Outcomes, Guaranteed Profit, Revenue Enhancement in addition to new lines of service.</li>
                        <li>Medicare Part B Provider</li>
                    </ul>
                </div>
            </div>

                <div class="column">   
                    <div class="content">
                        <h3>Technology</h3>
                        <ul>
                            <li>CASAMBA - Therapy Software – Practice Management Software</li>
                            <li>OnusOne – Web Based, Shared-Risk Employee Compensation Program</li>
                            <li>Equipment – Access to Therapy Equipment provided by <router-link class="underline" to="/TreatmentStrategies"> Innovative Treatment Strategies (ITS)</router-link></li>
                            <li>Payroll Based Journal Reporting – Quarterly Reports generated and provided to the facility.</li>
                        </ul>
                    </div>
                </div> 
            </div>
    </section>
    
    <section class="section">
        <div class="columns">
                <div class="column">   
                    <div class="content">
                        <h3>Consultation Services</h3>
                        <p>Rehab Strategies offers up a comprehensive consultation service package for facilities that wish to setup and run their own Rehab department. We provide guidance thru the following phases:</p>
                        <ul>
                            <li>Management Systems and Tools</li>
                            <li>Efficient Staffing Models</li>
                            <li>Philosophy/Culture Training</li>
                            <li>Delivery of Care Training</li>
                        </ul>
                    </div>
                </div> 
            
            <div class="column">
                <div class="content">
                    <h3>Clinical Programs</h3>
                        <ul>
                            <li>Rock Steady</li>
                            <li>The Climb</li>
                            <li>Wellness Direction</li>
                        </ul>
                </div>
            </div>
            </div>
    </section>
    </div>

    <footer class="footer">
    <div class="content has-text-centered">
        <div class="columns">
            <div class="column">
                <div class="content">
                    <h2>Call Us</h2>
              <p>Phone: (317) 887-1600</p>
              <p>Toll Free: 1 (877) 60-REHAB</p>
                </div>
            </div>

            <div class="column">
                <div class="content">
                    <h2>Email Us</h2>
                    <p><a href="mailto:info@rehabstrategies.net">info@rehabstrategies.net</a></p>
                </div>
            </div>

            <div class="column">
                <div class="content">
                    <h2>Photography</h2>
                    <a href="https://unsplash.com/@heftiba?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Toa Heftiba</a> on <a href="https://unsplash.com/s/photos/physical-therapy?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
        </div>
    </div>
    </footer>
        </div>
</template>

<script>
    export default {
        name:"RehabStrategies",
        metaInfo: {
            title: "Rehab Strategies",
            meta: [
                { property: 'og:title', content: "Rehab Strategies" },
                { property: 'og:url', content: "http://www.thestrategies.com/#/RehabStrategies" },
                { property: 'og:image', content: "../assets/imgs/logos/rehab.jpg" },
                { property: 'og:description', content: "Rehab Strategies is a provider of Physical, Occupational and Speech Therapy in addition to in-house Wellness Direction in Indiana." },
            ]
        },
        data() {
            return {
                isActive: false,
                OccIsActive: false,
                SpeechIsActive: false,
            }
        },
        methods: {
            toggleModal() {
                this.isActive = !this.isActive
            },
            toggleOccModal() {
                this.OccIsActive = !this.OccIsActive
            },
            toggleSpeechModal() {
                this.SpeechIsActive = !this.SpeechIsActive
            },
        }
    }
</script>

<style scoped>
hr {
    color:grey;
    border: solid 1px lightgrey;
    width:100%;
}

.underline {
    text-decoration:underline ;
}
</style>