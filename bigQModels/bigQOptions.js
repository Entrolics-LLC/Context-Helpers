const { SELECT, RANGE, INPUT, RADIO, STRING, NUMBER, FLOAT } = require('./bigQConstant')

exports.DATA_SPLIT_METHOD = {
    key: 'DATA_SPLIT_METHOD',
    type: STRING,
    columnName: 'L2 Regularization',
    columnType: SELECT,
    options: [
        {
            name: 'AUTO_SPLIT',
            value: 'Auto Split'
        },
        {
            name: 'RANDOM',
            value: 'Random'
        },
        {
            name: 'CUSTOM',
            value: 'Custom'
        },
        {
            name: 'SEQ',
            value: 'Seq'
        },
        {
            name: 'NO_SPLIT',
            value: 'No Split'
        }
    ],
    multiple: false,
    required: false
}

exports.warmOption = {
    key: 'WARM_START',
    type: STRING,
    columnName: 'Warm Start',
    columnType: RADIO,
    options: [
        {
            name: 'TRUE',
            value: true
        },
        {
            name: 'FALSE',
            value: false
        }
    ],
    required: false
}

exports.autoClassOption = {
    key: 'AUTO_CLASS_WEIGHTS',
    type: STRING,
    columnName: 'Auto Class Weights',
    columnType: RADIO,
    options: [
        {
            name: 'TRUE',
            value: true
        },
        {
            name: 'FALSE',
            value: false
        }
    ],
    required: false
}

exports.K_MEAN_OPTIONS = [
    {
        key: 'DISTANCE_TYPE',
        type: STRING,
        columnName: 'Distance Type',
        columnType: RADIO,
        options: [
            {
                name: 'EUCLIDEAN',
                value: 'Euclidean'
            },
            {
                name: 'COSINE',
                value: 'Cosine'
            }
        ],
        required: false
    },
    {
        key: 'NUM_CLUSTERS',
        type: NUMBER,
        columnName: 'Number of Clusters',
        columnType: RANGE,
        min: 2,
        max: 200,
        required: false
    },
    {
        key: 'STANDARDIZE_FEATURES',
        type: STRING,
        columnName: 'Strandardize Features',
        columnType: RADIO,
        options: [
            {
                name: 'TRUE',
                value: true
            },
            {
                name: 'FALSE',
                value: false
            }
        ],
        required: false
    },
]

exports.tensorflowOption = {
    key: 'MODEL_PATH',
    type: STRING,
    columnName: 'Model Path',
    columnType: INPUT,
    required: true
}

exports.autoMLOption = {
    key: 'BUDGET_HOURS',
    type: FLOAT,
    columnName: 'Budget Hours',
    columnType: RANGE,
    min: 1.0,
    max: 72.0,
    required: false
}

exports.BOOSTER_OPTIONS = [
    {
        key: 'BOOSTER_TYPE',
        type: STRING,
        columnName: 'Booster type',
        columnType: RADIO,
        options: [
            {
                name: 'GBTREE',
                value: 'GBTREE'
            },
            {
                name: 'DART',
                value: 'Dart'
            }
        ],
        required: false
    },
    {
        key: 'NUM_PARALLEL_TREE',
        type: NUMBER,
        columnName: 'Number of Parallel',
        columnType: INPUT,
        min: 1,
        required: false
    },
    {
        key: 'DART_NORMALIZE_TYPE',
        type: STRING,
        columnName: 'Booster type',
        columnType: RADIO,
        options: [
            {
                name: 'TREE',
                value: 'Tree'
            },
            {
                name: 'FOREST',
                value: 'Forest'
            }
        ],
        required: false
    },
    {
        key: 'TREE_METHOD',
        type: STRING,
        columnName: 'Tree Method',
        columnType: SELECT,
        options: [
            {
                name: 'AUTO',
                value: 'Auto'
            },
            {
                name: 'EXACT',
                value: 'Exact'
            },
            {
                name: 'APPROX',
                value: 'Approx'
            },
            {
                name: 'HIST',
                value: 'Hist'
            }
        ],
        multiple: false,
        required: false
    },
    {
        key: 'MIN_TREE_CHILD_WEIGHT',
        type: FLOAT,
        columnName: 'Minimum Tree Child Weight',
        columnType: INPUT,
        min: 0,
        required: false
    },
    {
        key: 'COLSAMPLE_BYTREE',
        type: FLOAT,
        columnName: 'Column Sample By Tree',
        columnType: RANGE,
        min: 0,
        max: 1,
        required: false
    },
    {
        key: 'COLSAMPLE_BYLEVEL',
        type: FLOAT,
        columnName: 'Column Sample By Level',
        columnType: RANGE,
        min: 0,
        max: 1,
        required: false
    },
    {
        key: 'MIN_SPLIT_LOSS',
        type: FLOAT,
        columnName: 'Minimum Split Loss',
        columnType: INPUT,
        required: false
    },
    {
        key: 'MAX_TREE_DEPTH',
        type: NUMBER,
        columnName: 'Minimum Split Loss',
        columnType: INPUT,
        required: false
    },
]

exports.DNNOptions = [
    {
        key: 'ACTIVATION_FN',
        type: STRING,
        columnName: 'Activation Function',
        columnType: SELECT,
        options: [
            {
                name: 'RELU',
                value: 'Relu'
            },
            {
                name: 'RELU6',
                value: 'Relu6'
            },
            {
                name: 'CRELU',
                value: 'CRelu'
            },
            {
                name: 'ELU',
                value: 'Elu'
            },
            {
                name: 'SELU',
                value: 'Selu'
            },
            {
                name: 'SIGMOID',
                value: 'Sigmoid'
            },
            {
                name: 'TANH',
                value: 'Tanh'
            }
        ],
        multiple: false,
        required: false
    },
    {
        key: 'BATCH_SIZE',
        type: NUMBER,
        columnName: 'Batch Size',
        columnType: RANGE,
        min: 1024,
        max: 8192,
        required: false
    },
    {
        key: 'DROPOUT',
        type: FLOAT,
        columnName: 'Dropout',
        columnType: RANGE,
        min: 0,
        max: 1,
        required: false
    },
    {
        key: 'OPTIMIZER',
        type: STRING,
        columnName: 'Optimizer',
        columnType: SELECT,
        options: [
            {
                name: 'ADAGRAD',
                value: 'ADAGRAD'
            },
            {
                name: 'ADAM',
                value: 'ADAM'
            },
            {
                name: 'FTRL',
                value: 'FTRL'
            },
            {
                name: 'RMSPROP',
                value: 'RMSPROP'
            },
            {
                name: 'SGD',
                value: 'SGD'
            }
        ],
        multiple: false,
        required: false
    }
]

exports.MATRIX_FACTORIZATION_OPTIONS = [
    {
        key: 'FEEDBACK_TYPE',
        type: STRING,
        columnName: 'Feedback Type',
        columnType: RADIO,
        options: [
            {
                name: 'EXPLICIT',
                value: 'Expilcit'
            },
            {
                name: 'IMPLICIT',
                value: 'Implicit'
            }
        ],
        required: false
    },
    {
        key: 'NUM_FACTORS',
        type: NUMBER,
        columnName: 'Number of Factors',
        columnType: RANGE,
        min: 2,
        max: 200,
        required: false
    },
    {
        key: 'USER_COL',
        type: STRING,
        columnName: 'User Column',
        columnType: INPUT,
        required: false
    },
    {
        key: 'RATING_COL',
        type: STRING,
        columnName: 'Rating Column',
        columnType: INPUT,
        required: false
    },
    {
        key: 'WALS_ALPHA',
        type: FLOAT,
        columnName: 'Wals Alpha',
        columnType: INPUT,
        required: false
    }
]

exports.ARIMA_PLUS_OPTIONS = [
    
]

exports.options = [
    {
        key: 'LS_INIT_LEARN_RATE',
        type: FLOAT,
        columnName: 'Initial Learning Rate',
        columnType: RANGE,
        min: 0.01,
        max: 1,
        required: true
    },
    {
        key: 'MAX_ITERATIONS',
        type: NUMBER,
        columnName: 'Max Iterations',
        columnType: INPUT,
        min: 1,
        required: true
    },
    {
        key: 'L1_REG',
        type: FLOAT,
        columnName: 'L1 Regularization',
        columnType: INPUT,
        required: false
    },
    {
        key: 'L2_REG',
        type: FLOAT,
        columnName: 'L2 Regularization',
        columnType: INPUT,
        required: false
    },
    {
        key: 'EARLY_STOP',
        type: STRING,
        columnName: 'Early Stop',
        columnType: RADIO,
        options: [
            {
                name: 'TRUE',
                value: true
            },
            {
                name: 'FALSE',
                value: false
            }
        ],
        required: false
    },
    {
        key: 'MIN_REL_PROGRESS',
        type: FLOAT,
        columnName: 'Minimum Relative Progress',
        columnType: RANGE,
        min: 0.01,
        max: 1,
        required: false
    },
    {
        key: 'COLSAMPLE_BYNODE',
        type: FLOAT,
        columnName: 'Column Sample By Node',
        columnType: RANGE,
        min: 0,
        max: 1,
        required: false
    },
    {
        key: 'SUBSAMPLE',
        type: FLOAT,
        columnName: 'Sub Sample',
        columnType: RANGE,
        min: 0,
        max: 1,
        required: false
    },
    {
        key: 'AUTO_ARIMA',
        type: STRING,
        columnName: 'Auto Arima',
        columnType: RADIO,
        options: [
            {
                name: 'TRUE',
                value: true
            },
            {
                name: 'FALSE',
                value: false
            }
        ],
        required: false
    },
    {
        key: 'AUTO_ARIMA_MAX_ORDER',
        type: NUMBER,
        columnName: 'Auto Arima Max Order',
        columnType: RANGE,
        min: 2,
        max: 5,
        required: false
    }
]