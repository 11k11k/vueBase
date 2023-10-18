<template>
    <div class="my-tag">
        <input class="input" type="text" placeholder="输入标签" v-if="isEdit" v-focus :value="value" @blur="isEdit = false"
            @keyup.enter="handleEnter" />
        <div class="text" v-else @dblclick="handleClick">
            {{value}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    },
    data() {
        return {
            isEdit: false
        }
    }, methods: {
        handleClick() {
            this.isEdit = true
            // this.$nextTick(()=>{
            //     this.$refs.np.focus()
            // })

        },
        
        handleEnter(e) {
            // console.log(e.target.value);
            if(e.target.value.trim()==='')return alert("标签不能为空");
            this.$emit("input",e.target.value);
            this.isEdit=false;
        }
    },
    directives: {
        focus: {
            inserted(el) {
                el.focus();
                
            }
        }
    }

}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>