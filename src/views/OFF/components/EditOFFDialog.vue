<template>
  <el-dialog :title="dialog.title" :visible.sync="dialog.visible" width="980px">
    <el-form
      ref="frm"
      :model="dialog.params"
      label-position="left"
      label-width="120px"
      style="width: 86%; margin-left: 50px"
    >
      <el-form-item label="上传APP" prop="type">
        <el-select
          v-model="dialog.params.type"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option label="item.display_name" value="item.key" />
        </el-select>
      </el-form-item>

      <el-form-item label="选择国家" prop="type">
        <el-select
          v-model="dialog.params.type"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option label="item.display_name" value="item.key" />
        </el-select>
      </el-form-item>

      <el-form-item label="任务类型" prop="type">
        <el-select
          v-model="dialog.params.type"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option label="item.display_name" value="item.key" />
        </el-select>
      </el-form-item>

      <el-form-item label="任务标题" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="任务描述" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="配置落地页链接" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="任务图标">
        <el-upload
          class="image-uploader"
          :class="{ 'el-upload--hide': hideUpload }"
          drag
          action="#"
          list-type="picture-card"
          accept=".jpg,.png"
          :auto-upload="false"
          :limit="1"
          :on-remove="handleRemove"
          :on-change="handleEditChange"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
          <div class="el-upload__tip" slot="tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="任务图片" prop="content">
        <Tinymce ref="editor" v-model="dialog.params.content" :height="400" />
      </el-form-item>

      <el-form-item label="平台" prop="content">
        <el-radio v-model="dialog.params.radio" label="1">Anedroid</el-radio>
        <el-radio v-model="dialog.params.radio" label="2">IOS</el-radio>
        <el-radio v-model="dialog.params.radio" label="3">所有</el-radio>
      </el-form-item>

      <el-form-item label="任务发布金币" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="任务今日目标" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="任务单价/个" prop="type">
        <el-input v-model="dialog.params.title" />
      </el-form-item>

      <el-form-item label="发布日期" prop="type">
        <el-date-picker
          v-model="dialog.params.value1"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="结束日期" prop="type">
        <el-date-picker
          v-model="dialog.params.value1"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item label="备注" prop="type">
        <el-input
          v-model="dialog.params.remark"
          :autosize="{ minRows: 3, maxRows: 6 }"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button>保存</el-button>
      <el-button type="primary">上架</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Object,
      default() {
        return {
          visible: false,
          loading: false,
          open: Symbol(),
          title: "编辑",
          params: {},
        };
      },
    },
  },
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
      hideUpload: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      this.hideUpload = fileList.length >= 1;
      console.log(file);
    },
    handleEditChange(file, fileList) {
      this.hideUpload = fileList.length >= 1;
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .image-uploader {
  .el-upload--picture-card {
    width: auto;
    height: auto;
    line-height: initial;
    border: none;
  }

  .el-upload__tip {
    line-height: 1;
    color: #f56c6c;
  }
}
</style>
