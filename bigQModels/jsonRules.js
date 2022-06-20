const { SELECT, STRING, NUMBER, MODEL_TYPES, regression, warmStart, autoML, autoClassWeights, boostedTree, DNN, DATA_SM } = require('./bigQConstant')
const { warmOption, autoClassOption, K_MEAN_OPTIONS, autoMLOption, BOOSTER_OPTIONS, DNNOptions, DATA_SPLIT_METHOD, options, MATRIX_FACTORIZATION_OPTIONS } = require('./bigQOptions')

// Skip 3 options [HIDDEN_UNITS, CLASS_WEIGHTS, HOLIDAY_REGION, DATA_SPLIT_COL, KMEANS_INIT_METHOD, KMEANS_INIT_COL, USER_COL, LEARN_RATE_STRATEGY, LEARN_RATE, ITEM_COL, RATING_COL, OPTIMIZE_STRATEGY, TIME_SERIES_TIMESTAMP_COL, TIME_SERIES_DATA_COL, TIME_SERIES_ID_COL, HORIZON, NON_SEASONAL_ORDER, DATA_FREQUENCY, INCLUDE_DRIFT, DATA_SPLIT_EVAL_FRACTION]

const customRules = (modelType) => {
    let inputLabel = {
        key: 'INPUT_LABEL_COLS',
        type: regression.indexOf(modelType) === -1 ? STRING : NUMBER,
        accept: ['INT64', 'NUMERIC', 'BIGNUMERIC', 'FLOAT64'],
        columnName: 'Input Labels',
        columnType: SELECT,
        multiple: false,
        required: true
    }

    let updatedOptions = [inputLabel, ...options]

    warmStart.indexOf(modelType) !== -1 && updatedOptions.push(warmOption)
    autoClassWeights.indexOf(modelType) !== -1 && updatedOptions.push(autoClassOption)
    modelType === 'KMEANS' && (updatedOptions = [...updatedOptions, ...K_MEAN_OPTIONS])
    modelType === 'TENSORFLOW' && (updatedOptions = [tensorflowOption, ...updatedOptions])
    modelType === 'MATRIX_FACTORIZATION' && (updatedOptions = [...MATRIX_FACTORIZATION_OPTIONS, ...updatedOptions])
    autoML.indexOf(modelType) !== -1 && updatedOptions.push(autoMLOption)
    boostedTree.indexOf(modelType) !== -1 && (updatedOptions = [...BOOSTER_OPTIONS, ...updatedOptions])
    DNN.indexOf(modelType) !== -1 && (updatedOptions = [...updatedOptions, ...DNNOptions])
    DATA_SM.indexOf(modelType) === -1 && (updatedOptions.push(DATA_SPLIT_METHOD))

    return updatedOptions
}

module.exports = {
    customRules,
    MODEL_TYPES
}