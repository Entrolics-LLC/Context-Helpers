const SELECT = 'select'
const RANGE = 'range'
const INPUT = 'input'
const RADIO = 'radio'

const STRING = 'string'
const NUMBER = 'number'
const FLOAT = 'float'

const MODEL_TYPES = ['LINEAR_REG', 'LOGISTIC_REG', 'KMEANS', 'TENSORFLOW', 'MATRIX_FACTORIZATION', 'AUTOML_CLASSIFIER', 'AUTOML_REGRESSOR', 'BOOSTED_TREE_CLASSIFIER', 'BOOSTED_TREE_REGRESSOR', 'DNN_CLASSIFIER', 'DNN_REGRESSOR', 'ARIMA_PLUS']

const regression = ['LINEAR_REG', 'LOGISTIC_REG']
const warmStart = [...regression, 'KMEANS', 'DNN_REGRESSOR', 'DNN_CLASSIFIER']
const autoML = ['AUTOML_CLASSIFIER', 'AUTOML_REGRESSOR']
const autoClassWeights = ['BOOSTED_TREE_CLASSIFIER', 'DNN_CLASSIFIER', 'LOGISTIC_REG']
const boostedTree = ['BOOSTED_TREE_CLASSIFIER', 'BOOSTED_TREE_REGRESSOR']
const DNN = ['DNN_CLASSIFIER', 'DNN_REGRESSOR']
const DATA_SM = ['TENSORFLOW', 'KMEANS']

module.exports = {
    SELECT,
    RANGE,
    INPUT,
    RADIO,
    STRING,
    NUMBER,
    FLOAT,
    MODEL_TYPES,
    regression,
    warmStart,
    autoML,
    autoClassWeights,
    boostedTree,
    DNN,
    DATA_SM
}