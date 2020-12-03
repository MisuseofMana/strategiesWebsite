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
                <div class="content">
                    <h1 class="title">What is Rehab Strategies and what can we do for you?</h1>
                    <p>
                        After working for similar rehabilitation companies, Ron Cram and Jamey Kleva launched Rehab Strategies in 2006. Because Ron and Jamey are therapists themselves with over 50 years of combined clinical experience in the rehabilitation industry, they will work hand-in-hand with your company on how best to construct the therapy department.  If management or consulting is what your facility needs, Rehab Strategies can also provide expertise in those areas.  
                    </p>
                    
                    <p>
                        Rehab Strategies will alleviate stress by internalizing decisions and solving problems for any provider housing a rehab department.  Ron and Jamey will work in conjunction with the facility to build therapy teams that are highly motivated, efficient and produce cost-effective outcomes.  Their model isn’t just for long term care facilities; it can be tailored to fit the needs of hospitals, outpatient centers, skilled nursing facilities, assisted and independent living centers.
                    </p>

                    <p>
                        Is your facility struggling with census and losing patients to home health?  Do your patients need a spark to get them on the road to recovery?
                    </p>

                    <p>
                        Rehab Strategies can help with these troubling statistics.  We will provide your facility with a full-time physical, occupational and speech staff who will work on site daily.  The staff will engage the residents by creating a cohesive therapy department that provides exemplary patient care.  Patients become familiar with the therapists and love to be a part of the therapy family while they work to recover strength and health. Many residents enjoy the personal attention and comradery so much that they continue with their therapy services through private pay. 
                    </p>

                    <h1 class="title">A Partnership Built Upon Trust</h1>
                    <p>
                    One of the newest services Rehab Strategies provides is a Wellness Program for seniors focusing on health and wellbeing.  Residents can participate in Thai chi, Pilates and yoga as well as a wide variety of aerobic classes, and our certified athletic trainers specialize in Parkinson’s classes like The Climb, Rock Steady Boxing, Lee Silverman Voice Training and the Loud Program. 
                    </p>

                    <p>
                    But, the number one reason to choose to work with Rehab Strategies is that they will guarantee all facilities a profit on rehabilitation therapy services.  
                    </p>
                </div>
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
                Want to learn more?  Contact Ron and Jamey at thestrategies.net, they have a unique pay structure that gives the therapist autonomy and makes them an active partner in their own productivity. 
            </p>

             <h1>The Rehab Strategies Process</h1>

                <ol>
                    <li>Have a facility that needs either a full-time therapy department or just a boost in therapy revenue.</li>
                    <li>Contact Rehab Strategies and set a <span class="fix">free consultation</span></li>
                    <li>Let Rehab Strategies provide your facility a therapy department with full-time physical, occupational and speech therapists.</li>
                    <li>Let Rehab Strategies alleviate all your day to day rehab hurdles by internalizing all details leaving the facility with more time to focus on patient care.</li>
                    <li>Let ITS install the MR Cube, an outcome based, interactive patient activity system that objectively monitors growth, in your department.</li>
                    <li>Let our therapists create a lively therapy gym where patients want to be a part of the action while improving their health and wellbeing.</li>
                    <li>See your patients improve daily and enjoy life.</li>
                    <li>Invest in the Rehab Strategies model and see your facility earn a guaranteed profit from therapy services.</li>
                </ol>
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

     <div class="box">
        <div class="columns is-variable is-6">
            <div class="column">
                <div class="container">
                    <div class="content">
                        <h1 class="title">Rehab Strategies FAQ</h1>
                        <ul>
                            <li>
                                <strong>What is Rehab Strategies?</strong>
                                Rehab Strategies is a rehabilitation contract management and consulting company.
                            </li>
                            <li>
                                <strong>What can we do for you?</strong>
                                We will work hand-in-hand with your organization on how best to construct your therapy department.  If management or consulting is what your facility needs, Rehab Strategies can also provide expertise in those areas.  
                            </li>
                            <li>
                                <strong>When should I call Rehab Strategies?</strong>
                                If your facility is struggling with lower census and losing patients to home health or other facilities.
                            </li>
                            <li>
                                <strong>Why should we use Rehab Strategies contract therapy versus an in-house program?</strong>
                                Rehab Strategies will guarantee your facility a profit.  We will free up your internal resources by assuming the recruiting, hiring, training, scheduling and oversite of your therapy team.  
                            </li>
                            <li>
                                <strong>What specific services will Rehab Strategies provide?</strong>
                                Physical, Occupational and Speech therapists with specialties in lymphedema, dementia, and balance disorders.  We also provide reporting of clinical outcomes, financial performance and discharge statistics.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="container">
                    <div class="content">
                        <ul>
                            <li>
                                <strong>Will Rehab Strategies address our facility’s unique needs?</strong>
                                Rehab Strategies is a boutique provider that will tailor your program for your unique environment.  Our model isn’t just for long term care facilities; it can be tailored to fit the needs of hospitals, outpatient centers, skilled nursing facilities, assisted and independent living centers. 
                            </li>
                            <li>
                                <strong>How can Rehab Strategies engage our long-term residents?</strong>
                                Our therapists will utilize a combination of high tech equipment, wellness programming, and restorative programming to achieve the highest level of functioning for your residents. Patients become familiar with the consistency of our therapists and love to be a part of the therapy family while they work to recover strength and health. 
                            </li>
                            <li>
                                <strong>How will our residents benefit from your Wellness Program?</strong>
                                Residents can participate in one-on-one personal training as well as group classes.  Our program includes Thai Chi, Pilates and yoga as well as a wide variety of aerobic classes, and our certified athletic trainers specialize in Parkinson’s classes like The Climb, Rock Steady Boxing, Lee Silverman Voice Training and the Loud Program. 
                            </li>
                            <li>
                                <strong>How can we contact Rehab Strategies for more information?</strong>
                                Call 877-60-Rehab or info@rehabstrategies.net
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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