<template>
<div>
     <el-main>
          <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
                <h1>Meet Our Team</h1>
            </el-col>
        </el-row>

        <!-- RON -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Ron Cram, PT</h1>
            <el-image
                :src="ronUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">
                <h1>CEO</h1>
                <h2>The Strategies</h2>
                <p>Short bio, maybe 200 to 300 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel sequi cum omnis dignissimos odio corrupti mollitia aliquid officia non accusamus nesciunt, a in exercitationem? In hic ipsum cupiditate autem?</p>
            </el-col>
        </el-row>

        <el-divider></el-divider>

        <!-- Jamey -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Jamey Kleva, PTA</h1>
            <el-image
                :src="jameyUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">
                <h1>President</h1>
                <h2>The Strategies</h2>
                <p>Short bio, maybe 200 to 300 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel sequi cum omnis dignissimos odio corrupti mollitia aliquid officia non accusamus nesciunt, a in exercitationem? In hic ipsum cupiditate autem?</p>
            </el-col>
        </el-row>

        <el-divider></el-divider>

        <!-- Caitlin -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Caitlin Barry</h1>
            <el-image
                :src="caitlinUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">
                <h1>Executive Administrative Assistant</h1>
                <h2>Care Strategies, Staffing Strategies and Rehab Strategies</h2>
                <p>Short bio, maybe 200 to 300 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel sequi cum omnis dignissimos odio corrupti mollitia aliquid officia non accusamus nesciunt, a in exercitationem? In hic ipsum cupiditate autem?</p>
            </el-col>
        </el-row>

        <el-divider></el-divider>

        <!-- Lisa -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Lisa Weartz, SHRM-CP</h1>
            <el-image
                :src="lisaUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">

                <el-image
                style='width:100px;'
                class="shrmIcon"
                :src="shrmUrl">
            </el-image>

                <h1>Human Resources Director</h1>
                <h2>Care Strategies, Staffing Strategies and Rehab Strategies</h2>
                <p>As a former educator Lisa brings leadership and organizational skills to the team. She holds a B.A. in
education from Northern Kentucky University as well as being a Certified HR Professional through the
Society for Human Resource Management, SHRM®. 
                </p>
                
                <p>
As an overseer of Employee Benefits for The
Company, she maintains an active license in Life and Health Insurance for Indiana and Ohio. Proficient in
payroll processing, Lisa has experience in several recognized Payroll Systems such as Online Employer®,
Quickbooks®, Paycor® and OnusOne®. 
                </p>
                
                <p>Additionally, Lisa rounds out the team with her abilities to
recognize gaps in HR compliance and is a valuable resource for HR consultation needs. Her hobbies are
photography, gardening with native plants and cooking. She is currently working toward her
Certification as a Southern Appalachian Naturalist thru the University of Tennessee and Tremont
Institute.
                </p>
            </el-col>
        </el-row>

        <el-divider></el-divider>

        <!-- Cathy -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Cathy Young, HFA</h1>
            <el-image
                :src="cathyUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">
                <h1>Healthcare Facility Administrator</h1>
                <h2>Care Strategies</h2>
                <p>Short bio, maybe 200 to 300 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel sequi cum omnis dignissimos odio corrupti mollitia aliquid officia non accusamus nesciunt, a in exercitationem? In hic ipsum cupiditate autem?</p>
            </el-col>
        </el-row>
        
        <el-divider></el-divider>

        <!-- Lauren Cram -->
        <el-row :gutter="40">
            <el-col class="profileCard" :span="6">
            <h1>Lauren Cram</h1>
            <el-image
                :src="laurenUrl"
                fit="fill">
            </el-image>
            </el-col>

            <el-col class="profileText" :span="18">
                <h1>Staffing Coordinator</h1>
                <h2>Staffing Strategies</h2>
                <p>Short bio, maybe 200 to 300 words. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo vel sequi cum omnis dignissimos odio corrupti mollitia aliquid officia non accusamus nesciunt, a in exercitationem? In hic ipsum cupiditate autem?</p>
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
              <li><span><a href="https://unsplash.com/@sjois71?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">joyce huis</a> on <a href="https://unsplash.com/collections/1408580/elderly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></li>
            </ul>
          </div>

        </el-footer>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                ronUrl: require('@/assets/imgs/ron.png'),
                jameyUrl: require('@/assets/imgs/jamey.png'),
                lisaUrl: require('@/assets/imgs/lisa.png'),
                cathyUrl: require('@/assets/imgs/cathy.png'),
                caitlinUrl: require('@/assets/imgs/caitlin.png'),
                laurenUrl: require('@/assets/imgs/lauren.png'),
                shrmUrl: require('@/assets/imgs/shrm.png'),
            }
        },
    }
</script>

<style scoped>
.el-image {
    width:200px;
}

.profileCard {
    text-align:center;
}

.profileText h1 {
    font-size:35px;
}

.profileText h2{
    font-size:25px;
}

.profileText p {
    font-size: 20px;
}
</style>