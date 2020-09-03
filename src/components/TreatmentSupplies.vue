<template>
<div>
     <el-main>
        <el-row :gutter="40">
            <el-col :span="24">
                <h1>Innovative Treatment Supplies</h1>
            </el-col>
        </el-row>

          <el-row :gutter="40">
            <el-col :span="12">
                
                <el-image
                    :src="treatmentUrl"
                    fit="fill">
                </el-image>

                <h2>We are Innovative Treatment Supplies</h2>

                <p>
                    ITS sells the best quality medical, therapy, and athletic training equipment on the market from Hausmann Industies. Over 90% of these products are made in Hausmann's 65,000 sq. ft. factory in Northvale, New Jersey. Hausmann's quality products are manufactured for the world, by Americans and made in the U.S.A.
                </p>

                <p>
                    In today's business environment, staying at the front of the pack is an increasingly harder position to maintain - at Hausmann it is a way of life. Hausmann is committed to maintaining our reputation and position of leadership. We will continue to strive toward this goal every day and it will show in everything we do.
                </p>
            
            </el-col>

            <el-col :span="12">
                


                <h2>What Do We Do?</h2>

                <p>
                    All of the ITS specialized treatment systems are designed to simultaneously provide the following benefits to our customers:
                </p>

                <ul>
                  <li>Build Their Business</li>
                  <li>Empower and Equip Your Therapists</li>
                    <li>Enhance Patient Outcomes</li>
                </ul>

                <h2>Building Your Therapy Business</h2>

                <p>
                    Our solutions introduce new revenue sources by expanding specialized treatment for a broader range of patient conditions. With these new expanded therapy services, referrals are increased from existing referral sources, and new referral sources are created from current referrors, patients, and providers. Our systems allow you to differentiate your clinic from competitors by having state-of-the-art equipment and programs that allow therapists and clinicians to electronically show and document progress of patients' outcomes. 
                </p>
                
                <p> 
                    By offering new specialty therapy programs, and marketing these specialties to the medical providers in your area, referrals from all your referral sources are increased. Reimbursement and denials are minimized with our systems.
                </p>

                <h2>Empowering and Equiping Your Therapists</h2>

                <p>
                    ITS' solutions help reduce patients' pain in therapy, and speed up healing by allowing the patient to engage with the systems they are using. This allows the therapists to introduce more intense therapies sooner to arrive at the desired treatment outcomes faster. By allowing your therapists to be trained on and use the latest and most effective products, you offer a more enriching therapy environment for improved job satisfaction and retention. Athletic Trainers are now able to accelerate recovery and improve outcomes for athletes and others with sports related injuries.
                </p>

                <h2>Enhancing Patient Outcomes and Satisfaction</h2>

                <p>
                    Because you now have state-of-the-art therapeutic systems, your facility can now offer treatment options for a broader range of patients and more medically complex conditions for which you were previously not equipped to treat. Evidence-based clinical programs and advanced therapeutic modalities help enhance recovery, functional gains and clinical outcomes ITS' comprehensive and better-designed clinical programs promote patient wellness and help reduce risk for serious injuries during treatment. Overall patient and family satisfaction are greatly increased, because the desired functional outcomes and patients' quality of life are greatly improved.
                </p>
            </el-col>
          </el-row>
        </el-main>

        <el-footer height="300px;">
          <div>
              <h2>Find Us</h2>
              <p>Our Address Here</p>
              <p>Our Address Here</p>
              <p>Our Address Here</p>
          </div>
          <div>
            <h2>Contact Us</h2>
            <p>Phone Number Here</p>
            <p>Toll Free Number</p>
            <p>Fax</p>
            <p>Email Address</p>
          </div>
          <div>
            <h2>Photography</h2>
            <ul>
              <li><span><a href="https://unsplash.com/@frankiefoto?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">frank mckenna</a> on <a href="https://unsplash.com/s/photos/shipping?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
            </ul>
          </div>

        </el-footer>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                treatmentUrl: require('@/assets/imgs/supplies.jpg')
            }
        },
    }
</script>

<style scoped>

</style>