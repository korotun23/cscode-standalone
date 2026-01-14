<template>
  <!-- HERO -->
  <div class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Welcome to Barcode Generator</h1>
        <p class="subtitle">Ready to generate some code ?</p>
      </div>
    </div>
  </div>
  <div class="block"></div>
  <!-- END HERO -->

  <!-- CONTENT : SETTINGS -->
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-7">
        <div class="card">
          <div class="card-header">
            <h2 class="card-header-title">Settings</h2>
          </div>
          <div class="card-content">
            <div class="field">
              <div class="select is-fullwidth">
                <select v-model="selectedBarcodeType">
                  <option disabled value>Barcode type</option>
                  <option
                    v-for="barcodeType in barcodeTypes"
                    :key="barcodeType.identifier"
                    :value="barcodeType"
                    @change="updateDefaultValues(barcodeType)"
                  >
                    {{ barcodeType.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="columns fieldset">
              <div class="column is-6">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-fullwidth"
                      type="text"
                      placeholder="Width"
                      v-model="barcodeWidth"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-fullwidth"
                      type="text"
                      placeholder="Height"
                      v-model="barcodeHeight"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="select is-fullwidth">
                <select>
                  <option>Image format</option>
                  <option>png</option>
                  <option>jpg</option>
                  <option>jpeg</option>
                  <option>webp</option>
                  <option>svg</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox" />
                Print text value
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- END SETTINGS -->

      <!-- CONTENT : PREVIEW -->
      <div class="column is-5">
        <div class="card">
          <div class="card-header">
            <h2 class="card-header-title">Preview</h2>
          </div>
          <div class="card-content">
            <img
              class="image is-3by1"
              src="https://bulma.io/assets/images/placeholders/1280x960.png"
              alt=""
            />
            <div class="field pt-5">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Enter a test value"
                  v-model="barcodeValue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END PREVIEW -->

      <!-- CONTENT : UPLOAD DATABASE -->
      <div class="columns pt-3">
        <div class="column is-12">
          <div class="card">
            <div class="card-header">
              <h2 class="card-header-title">Upload database</h2>
            </div>
            <div class="card-content">
              <div class="columns">
                <div class="column is-10">
                  <div class="file has-name is-fullwidth">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="material-symbols-outlined pr-2"> database_upload </span>
                        <span class="file-label">Database file</span>
                      </span>
                      <span class="file-name">No file uploaded</span>
                    </label>
                  </div>
                </div>
                <div class="column is-2">
                  <button class="button is-primary is-outlined is-fullwidth">
                    <span class="material-symbols-outlined pr-2">upload</span>
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END UPLOAD DATABASE -->

      <!-- CONTENT : DATABASE SETTINGS -->
      <div class="columns">
        <div class="column is-12">
          <div class="card">
            <div class="card-header">
              <h2 class="card-header-title">Database Settings</h2>
            </div>
            <div class="card-content">
              <div class="columns">
                <div class="column is-6">
                  <div class="select is-fullwidth">
                    <select>
                      <option>Column with data ?</option>
                      <option>Column 1</option>
                      <option>Column 2</option>
                      <option>Column 3</option>
                    </select>
                  </div>
                  <div class="block"></div>
                  <div class="select is-fullwidth">
                    <select>
                      <option>Column with files name ?</option>
                      <option>Column 1</option>
                      <option>Column 2</option>
                      <option>Column 3</option>
                    </select>
                  </div>
                </div>
                <div class="column is-6">
                  <h3 class="subtitle has-text-primary">File infos</h3>
                  <p>File name : <span>unknown</span></p>
                  <p>Number of lines : <span>0</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END DATABASE SETTINGS -->

      <!-- CONTENT : GENERATE -->
      <div class="columns">
        <div class="column is-12">
          <div class="card">
            <div class="card-content">
              <div class="columns">
                <div class="column is-3">
                  <button class="button is-primary is-fullwidth is-outlined">
                    <span class="material-symbols-outlined pr-2"> barcode </span>
                    Generate
                  </button>
                </div>
                <div class="column is-3">
                  <button class="button is-primary is-fullwidth is-outlined" disabled>
                    <span class="material-symbols-outlined pr-2"> download </span>
                    Dowload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END GENERATE -->
    </div>
  </div>
  <div class="block"></div>
</template>

<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue'
import { BarcodeTypeService } from '../services/barcodeTypeService'

import type { Ref } from 'vue'
import type { BarcodeTypeInterface } from '../types/barcodeTypeInterface'

export default defineComponent({
  name: 'BarcodeGeneratorView',
  setup() {
    // Services injected
    const barcodeTypeService: BarcodeTypeService | undefined =
      inject<BarcodeTypeService>('barcodeTypeService')

    const barcodeTypes: BarcodeTypeInterface[] | undefined = barcodeTypeService?.getBarcodeTypes()

    const barcodeWidth: Ref<number> = ref(0)
    const barcodeHeight: Ref<number> = ref(0)
    const barcodeValue: Ref<string> = ref('')

    const selectedBarcodeType = ref<BarcodeTypeInterface | undefined>(undefined)

    function updateDefaultValues(barcodeType: BarcodeTypeInterface | undefined) {
      if (typeof barcodeType === 'undefined') {
        barcodeWidth.value = 0
        barcodeHeight.value = 0
        barcodeValue.value = ''
        return
      }
      barcodeWidth.value = barcodeType.size[0]
      barcodeHeight.value = barcodeType.size[1]
      barcodeValue.value = barcodeType.defaultValue
      console.log(barcodeType)
    }

    watch(selectedBarcodeType, (newBarcodeType: BarcodeTypeInterface | undefined) => {
      updateDefaultValues(newBarcodeType)
    })

    return {
      barcodeTypes,
      barcodeWidth,
      barcodeHeight,
      barcodeValue,
      selectedBarcodeType,
      updateDefaultValues,
    }
  },
})
</script>

<style scoped lang="scss">
.container {
  .columns {
    height: auto;

    .column:first-child {
      padding-left: 0;
    }
    .column:nth-child(2) {
      padding-right: 0;
    }
    .column:last-child {
      padding-right: 0;
    }

    @media screen and (max-width: 768px) {
      .column {
        padding-left: 0;
        padding-right: 0;
        margin-top: 0;
        padding-top: 0;
      }
      .columns.fieldset {
        padding-top: 0.8rem;
      }
    }
  }

  .columns.fieldset {
    margin-bottom: 0;
  }
}

.card {
  height: 100%;

  .card-content {
    padding-bottom: 0;
  }
}

.field {
  padding-bottom: 0.5rem;
}
</style>
